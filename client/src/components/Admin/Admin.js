import React, { useState, useEffect } from "react";

import { link } from "react-router-dom";
// import TopBar from '../components/topbar/TopBar';
// import Sidebar from '../components/sidebar/Sidebar';
import Home from "../home/Home";
import TopBar from "../topbar/TopBar";
import Sidebar from "../sidebar/Sidebar";
import "./admin.css";
import Login from "../Login/Login";
import UserList from "../page/userList/UserList";
import Ftuser from "../Ftuser/Ftuser";
import Ftcontent from "../ftcontent/Ftcontent";
import Ftcategory from "../ftcategory/Ftcategory";
import NewUser from "../page/newUser/NewUser";
import Modal from "react-modal";
// import Popup from "./Popup";

export default function Admin({ setCategories, categories, users, setUsers }) {
  const [showusers, setShowusers] = useState(false);
  const [posts, setPosts] = useState(false);
  const [showcategory, setshowCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [popup, setPopup] = useState(false)

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

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

  return (
    <div className="Con">
      <TopBar />
      <div className="fluid">
        <div className="Con2">
          <Sidebar
            setShowusers={setShowusers}
            showusers={showusers}
            posts={posts}
            setPosts={setPosts}
            showcategory={showcategory}
            setModalIsOpen={setModalIsOpen}
            setshowCategory={setshowCategory}
          />
        </div>
        <div className="Container-fluid">
          {/* <button onClick={setPopup(true)}>Popup-B</button> */}
          <div className="users">
            {/* <Popup trigger={popup} setTrigger={setPopup} /> */}
            {showusers ? (
              <Ftuser users={users} setUsers={setUsers} />
            ) : (
              <NewUser />
            )}
          </div>
          {/* <button onClick={setPopup(true)}>Popup-B</button> */}
          {showcategory ? (
            <Ftcategory setCategories={setCategories} categories={categories} />
          ) : null}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: "navy",
              },
              content: {
                color: "orange",
                WebkitOverflowScrolling: "touch",
                maxWidth: "1000px"
              },
            }}
          >
            <div className="table">
              <div>
                {inspectedContent ? (
                  <div className="content-body-2">
                    <div className="inspect-content">
                      <h4>Title: {inspectedContent.title}</h4>
                      <p className="body">Content Body: {inspectedContent.content}</p>
                      <p>Category: {inspectedContent.category.category}</p>

                      <p>Likes: {inspectedContent.likes}</p>

                      {/* <p>Likes: {inspectedContent.is_approved}</p>
              <p>Likes: {inspectedContent.is_flagged}</p> */}
                      {/* / */}
                      <button onClick={() => setInspectedContent(null)}>
                        close
                      </button>
                      <button
                        onClick={() => handleContentApproval(inspectedContent)}
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="content-table">
                <h3>List of Contents</h3>
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

                <button onClick={() => setModalIsOpen(false)}>close</button>
              </div>
            </div>
          </Modal>

          {/* <div className="content">{posts ? <Ftcontent /> : null}</div> */}
        </div>
      </div>
    </div>
  );
}
