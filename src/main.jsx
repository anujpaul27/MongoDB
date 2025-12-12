import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './Component/Header.jsx'
import UpdateDetails from './Component/UpdateDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>
  },
  {
    path: '/update/:id',
    element: <UpdateDetails> </UpdateDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
