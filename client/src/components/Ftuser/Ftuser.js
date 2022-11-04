import { FormatColorReset } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Modal from 'react-modal'
import "./Ftuser.css";
export default function Ftuser({ users, setUsers }) {
  const [inspectedUser, setInspectedUser] = useState(null);
  
  // useEffect(() => {
  //     fetch('/users').then((r) => {
  //       if (r.ok) {
  //         r.json().then((users) => setUsers(users))
  //       }
  //     })
  //   }, [])
  // Handle delete
  function handleUserDelete(inspectedUser) {
    // e.preventDefault()
    console.log(inspectedUser);
    fetch(`/users/${inspectedUser.id}`, {
      method: "DELETE",
      //   body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((deleteduser) => {
        const updatedList = users.filter((user) => user.id !== deleteduser.id);
        setUsers(updatedList);
      });
  }


  const HandleInspectUser = (inspectedUser) => {
      console.log(inspectedUser)
     
       setInspectedUser(inspectedUser);
  }

  // Handle delete end

  // Handle Option 2
  // function handleDeleteItem(deletedItem) {
  //     const updatedItems = items.filter((item) => item.id !== deletedItem.id);
  //     setItems(updatedItems);
  //   }

  // // End of option 2

  return (
    <div className="Table-2">
      {/* <h1>List of Users</h1> */}
      <div className="user-details">
        {inspectedUser ? (
          <div className="content-body">
            {inspectedUser.email}
            <section className="section">
              <div className="inspect">

                <h3>User Details</h3>
                <p>Username: {inspectedUser.username}</p>
                <p>Email : {inspectedUser.email}</p>
                <p>Category: {inspectedUser.user_category}</p>
                <p>articles: {inspectedUser.posts.length}</p>
                <p>Videos: {inspectedUser.posts.length}</p>
                <p>Audios: {inspectedUser.posts.length}</p>
                <button onClick={() => setInspectedUser(null)}>close</button>
                <button onClick={() => handleUserDelete(inspectedUser)}>Delete</button>
              </div>
            </section>
          </div>
        ) : null}  
       
      </div>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th scope="col" style={{ color: "yellow" }}>
                First Name
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">User Category</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Imported */}
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.user_category}</td>
                  <td>{user.email}</td>
                  {/* <td >Button</td> */}

                 
                  <button onClick={() => HandleInspectUser(user)}>
                    Inspect
                  </button>
                  <button onClick={() => handleUserDelete(inspectedUser)}>Delete</button>
                </tr>
              );
            })}

            {/* End */}
          </tbody>
        </table>
      </div>

     
    </div>
  );
}
