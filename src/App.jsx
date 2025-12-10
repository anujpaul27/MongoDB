
import { useEffect, useState } from 'react'
import './App.css'
  
function App() {
  const [users, setUser] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=> res.json())
    .then(data=> {
      setUser(data);
    })
  },[])

  return (
    <>
      <h2>User Management System </h2>
      {
        users.map(user=> <p>{user.id}, {user.name}</p> )
      }
    </>
  )
}

export default App
