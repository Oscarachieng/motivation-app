import React, { useEffect, useState } from 'react'
import avatar from '../Assets/avator.png'

import './Staff.css'
import Ftcategory from '../ftcategory/Ftcategory'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import Category from '../Categoryfolder/Category'
import TelegramIcon from '@mui/icons-material/Telegram'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';


export default function Staff({ currentUser, articles, setCategories,categories }) {
  const [articleDetails,setArticleDetails] = useState({title:"",content:"",is_approved:true,likes:0,is_flagged:true,category_id:1,user_id:currentUser.id})
  const [showcategory,setshowCategory]= useState(false)
  const [showArticleCreationForm, setShowArticleCreationForm] = useState(false)

  //title - input
  //select - category - fronm backend

  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  // useEffect(()=>{
  //       fetch('/categories')
  //       .then(response=>response.json())
  //       .then(categories=>setCategories(categories))
  //       .catch(error=>console.log(error))
  // },[])



  function handleOnchange(event) {
    setArticleDetails({
      ...articleDetails,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/articles', {
      method: 'POST',
      body: JSON.stringify(articleDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((post) => console.log(post))
  }
  function handlePostClick(e) {
    setShowArticleCreationForm(!showArticleCreationForm)
  }
  // staffcategorycreation
  function handleCategoryClick() {
    setshowCategory(!showcategory)
  }
  // staff category creation ends

  return (
    <div className="card h-100 ">
      <div className=" card  " id="userbox" style={myStyles}>
        <div className="card-body">
          <div className="">
            <div className="" id="staff-page-profile">
              <img
                placeholder="{`${avatar}}"
                id="im-wd"
                className="rounded-circle img-fluid"
                src={currentUser.avatar_url.url}
                alt=""
              />
              <div className="staff-page-profile-text">
                <h6 className="card-title">
                  {currentUser.first_name + ' ' + currentUser.last_name}
                </h6>
                <p className="text mb-1">{currentUser.category}</p>
                <p className="text mb-1">{currentUser.about}</p>
              </div>
            </div>
            {/* user profile section */}
            <div>
            <button className="postbutton" onClick={handleCategoryClick}>
              Create Category
              
            </button>
            {showcategory? <Ftcategory setCategories={setCategories} categories={categories}/> : null}
            </div>
           

            {/* user comment area */}
            <button className="postbutton" onClick={handlePostClick}>
              Post
            </button>
            {showArticleCreationForm ? (
              <form onSubmit={handleSubmit} className="postform">
                <select name="category">
                  <option>Select the article category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category}
                    </option>
                  ))}
                </select>
                <input
                  name="title"
                  className="form-control"
                  id="textArea"
                  placeholder="Article Title"
                  value={articleDetails.title}
                  onChange={handleOnchange}
                />

                <textarea
                  name="content"
                  className="form-control mt-1"
                  id="textArea"
                  rows=""
                  value={articleDetails.content}
                  onChange={handleOnchange}
                ></textarea>
                {/* <div className="form-group m-2">
            <label 
            // for="formFileSm"
             className ="form-label">
              Profile picture
            </label>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
            /> 
          
          </div> */}
                <div>
                  {' '}
                  <button
                    className="btn-rounded float-end"
                    type="submit"
                    value="Send"
                    style={{ color: '#fa521c' }}
                  >
                    <TelegramIcon />
                  </button>
                </div>
              </form>
            ) : null}
            {/* user comment area section ends */}
          </div>

          <div className="media"></div>
          {/* Widget section */}
          <div className="card" style={{ width: '700px' }}>
            {articles.map((article) => (
              <Category
                key={article.id}
                article={article}
                currentUser={currentUser}
              />

            ))}
            
          </div>

          {/* widget section ends */}
        </div>
      </div>
    </div>
  )
}
