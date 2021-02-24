import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  return (
    <div className="App">
      <h1>I am react</h1>
      <Users></Users>

 
    </div>
  );
}




function Users () {
 const [users, setUser] = useState([]);
 useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUser(data))
   console.log(setUser)
 }, [])


 


  return(
    <div>
      <h1>dynamic user: {users.length}</h1>
     {
      users.map(user => <div className="userInterface">Name:{user.name} :: User Name:{user.username} Email:{user.email}  <button onClick="handelUserView()">View details</button></div>)
     }

    </div>
  )
}

export default App;
