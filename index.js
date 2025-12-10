const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')


// Middleware 
app.use(cors())

app.get ('/',(req,res)=>
{
  res.send('This is a get function  as well, right now')
})

const users = [
  {id: 1, name: 'Ram'}
]

app.get('/users', (req, res)=>{
  res.send(users)
})


app.listen(port, ()=>{
  console.log(`This application are run by this port: ${port} as well`);
})