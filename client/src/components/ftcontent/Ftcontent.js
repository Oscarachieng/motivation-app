import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Testing() {
    const [contents,setContents]=useState([])
     useEffect(() => {
    fetch('/articles').then((r) => {
      if (r.ok) {
        r.json().then((contents) => setContents(contents))
      }
    })
  }, [])
//   Update

function handleContentApproval(content) {
    // alert("Passed")
    console.log(content)
  const updatedApproval=!content.is_approved
    // Call onUpdateItem, passing the data returned from the fetch request
    fetch(`/articles/${content.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({is_approved:updatedApproval}),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
}
// End of update

// Delete
function handleContentDelete(content) {
    // e.preventDefault()
    console.log(content)
    fetch(`/articles/${content.id}`, {
      method: 'DELETE',
    //   body: JSON.stringify(userData),
    
    })
    .then((r) => r.json())
    .then((deletedcontent) => { 
        const updatedList= contents.filter((content) => content.id !== deletedcontent.id);
        setContents(updatedList);
    });
}

// End of Delete
  return (
    <div className="Table">
     
      <table>
        <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Category</th>
          <th scope='col'>is_approved</th>
        </tr> 
        </thead>
        <tbody>
            {/* Imported */}
            {contents.map((content) => {
          return (
            <tr key={content.id}>
              <td>{content.title}</td>
              <td>{content.category.category}</td>
              <td>{content.is_approved}</td>
           
              {/* <td >Button</td> */}
              
              <button onClick= {() => handleContentApproval(content)}>Approve</button>
              <button onClick= {() => handleContentDelete(content)}>Delete</button>
              <Link to={`/admin/${content.id}`} >MoreInfo</Link>

            </tr>
          )
        })}

            {/* End */}
        </tbody>
      </table>
     
 
    </div>
  )
}
