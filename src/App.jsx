import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  function handleOnSubmit (event)
  {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'         
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
      const newUser = [...users,data]
      setUser(newUser)
    })    

  }

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleOnSubmit} action="">
        <label htmlFor="">Name: </label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="">Email: </label>
        <input type="email" name="email" id=" " />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2>User Management System </h2>
      {users.map((user) => (
        <p key={user._id}>
          {user._id}, {user.name}
        </p>
      ))}
    </>
  );
}

export default App;
