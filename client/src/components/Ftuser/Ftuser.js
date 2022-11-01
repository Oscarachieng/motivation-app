import React,{useEffect,useState} from 'react'
import './Ftuser.css'
export default function Test() {
const [users,setUsers]=useState([])
useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((users) => setUsers(users))
      }
    })
  }, [])
// Handle delete
function handleUserDelete(user) {
    // e.preventDefault()
    console.log(user)
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
    //   body: JSON.stringify(userData),
    
    })
    .then((r) => r.json())
    .then((deleteduser) => { 
        const updatedList= users.filter((user) => user.id !== deleteduser.id);
        setUsers(updatedList);
    });
}

// Handle delete end

// Handle Option 2
// function handleDeleteItem(deletedItem) {
//     const updatedItems = items.filter((item) => item.id !== deletedItem.id);
//     setItems(updatedItems);
//   }

// End of option 2


  return (

<div className="Table">
     
      <table>
        <thead>
        <tr>
          <th scope='col'style={{color:"yellow"
        }}>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>User Category</th>
          <th scope='col'>Email</th>
          <th scope='col'>Action</th>
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
              
              <button onClick= {() => handleUserDelete(user)}>Deactivate</button>

            </tr>
          )
        })}

            {/* End */}
        </tbody>
      </table>
     
 
    </div>
  )

}

