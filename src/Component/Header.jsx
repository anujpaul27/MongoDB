import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

function Header() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function handleOnSubmit (event)
  {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email}

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
      setUsers(newUser)
    })    

  }

  function handleDelete(_id)
  {
    fetch(`http://localhost:5000/users/${_id}`,{
      method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
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
          <Link to={`update/${user._id}`}><button>Update</button></Link>
          <button onClick={()=>handleDelete(user._id)}>X</button>

        </p>
      ))}
    </>
  );
}

export default Header;
