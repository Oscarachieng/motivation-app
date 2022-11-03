import React, { useEffect, useState } from "react";

import "./Ftcontent.css";

export default function Testing() {
  const [contents, setContents] = useState([]);
  const [inspectedContent, setInspectedContent] = useState(null);
  useEffect(() => {
    fetch("/posts").then((r) => {
      if (r.ok) {
        r.json().then((contents) => setContents(contents));
      }
    });
  }, []);
  //   Update

  function handleContentApproval(inspectedContent) {
    // alert("Passed")
    console.log(inspectedContent);
    const updatedApproval = !inspectedContent.is_approved;
    // Call onUpdateItem, passing the data returned from the fetch request
    fetch(`/articles/${inspectedContent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_approved: updatedApproval }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }
  // End of update

  // Delete
  function handleContentDelete(content) {
    // e.preventDefault()
    console.log(content);
    fetch(`/articles/${content.id}`, {
      method: "DELETE",
      //   body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((deletedcontent) => {
        const updatedList = contents.filter(
          (content) => content.id !== deletedcontent.id
        );
        setContents(updatedList);
      });
  }

  // End of Delete
  return (
    <div className="table">
      <div>
      <h6>List of Users</h6>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">is_approved</th>
            <th scope="col">likes</th>
            <th scope="col">is_approved</th>
            <th scope="col">is_flagged</th>
            <th scope="col">Actions</th>
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
                <td>{content.likes}</td>
                <td>{content.is_flagged}</td>
                

                {/* <td >Button</td> */}

                
                <button onClick={() => handleContentDelete(content)}>
                  Delete
                </button>
                <button onClick={() => setInspectedContent(content)}>
                  Check
                </button>
              </tr>
            );
          })}

          {/* End */}
        </tbody>
      </table>
      </div>
      <div>
        {inspectedContent ? (
          <div className="content-body-2">
            <div className="inspect-content">
              <h4>
                Title: {inspectedContent.title}
               
              </h4>
              <p>
                 Content Body: {inspectedContent.content}
              </p>
              <p>Category: {inspectedContent.category.category}</p>

              <p>Likes: {inspectedContent.likes}</p>

              {/* <p>Likes: {inspectedContent.is_approved}</p>
              <p>Likes: {inspectedContent.is_flagged}</p> */}
              {/* / */}
              <button onClick={() => setInspectedContent(null)}>close</button>
              <button onClick={() => handleContentApproval(inspectedContent)}>
                  Approve
                </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
