import React, { useState } from "react";

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

export default function Admin({ setCategories, categories, users, setUsers }) {
  const [showusers, setShowusers] = useState(false);
  const [posts, setPosts] = useState(false);
  const [showcategory, setshowCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

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
            setshowCategory={setshowCategory}
          />
        </div>
        <div className="Container-fluid">
          <div className="users">
            {showusers ? (
              <Ftuser users={users} setUsers={setUsers} />
            ) : (
              <NewUser />
            )}
          </div>

          {showcategory ? (
            <Ftcategory setCategories={setCategories} categories={categories} />
          ) : null}

          <div className="content">{posts ? <Ftcontent /> : null}</div>
        </div>
      </div>
    </div>
  );
}
