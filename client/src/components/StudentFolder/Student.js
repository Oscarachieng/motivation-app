import React, { useEffect, useState } from 'react'

import './Student.css'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import Category from '../Categoryfolder/Category'
import TelegramIcon from '@mui/icons-material/Telegram'

export default function Student({ currentUser,onDelete, articles, categories, setCategories}) {
  const [articleDetails, setArticleDetails] = useState({
    title: '',
    content: '',
    is_approved: true,
    likes: 0,
    is_flagged: true,
    category_id: 1,
    user_id: currentUser.id,
  })
  // const [categories, setCategories] = useState([])

  //title - input
  //select - category - fronm backend

  const myStyles = {
    backgroundImage:
      "url('https://moringaschool.com/wp-content/uploads/2022/04/about-us-min.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }
  // useEffect(() => {
  //   fetch('/categories')
  //     .then((response) => response.json())
  //     .then((categories) => setCategories(categories))
  //     .catch((error) => console.log(error))
  // }, [])

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

  return (
    <div className="card h-100 ">
      <div className=" card  " id="userbox" style={myStyles}>
        <div className="card-body bg-primary bg-gradient bg-opacity-25">
          <div className="fixer">
            <div className="card-body " id="student-page-profile">
              <img
                id="im-wd"
                className="rounded-circle img-fluid"
                src={currentUser.avatar_url.url}
                alt="avatar"
              />
              <div className="student-page-profile-text">
                {' '}
                <h6 className="card-title">
                  {currentUser.first_name + ' ' + currentUser.last_name}
                </h6>
                <p className="text mb-1">CATEGORY</p>
                <p className="text mb-1">About</p>
              </div>
            </div>

            {/* user comment area */}
            <form onSubmit={handleSubmit} className="form-outline ">
              <label
                className="form-label"
                // for="textAreaExample"
                style={{ color: '#fa521c' }}
              >
                Say something...
              </label>
              <br />

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
                className="form-control text-black opacity-50 mt-3"
                id="textArea"
                placeholder="Article Title"
                value={articleDetails.title}
                onChange={handleOnchange}
              />

              <textarea
                name="content"
                className="form-control text-black opacity-50 mt-3"
                id="textArea"
                rows=""
                value={articleDetails.content}
                onChange={handleOnchange}
              ></textarea>
              <div className="form-group m-2">
                <label
                  // for="formFileSm"
                  className="form-label"
                >
                  Profile picture
                </label>
                <input
                  className="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                />
              </div>

              <button
                className="btn-rounded float-end"
                type="submit"
                value="Send"
                style={{ color: '#fa521c' }}
              >
                <TelegramIcon />
              </button>
            </form>
            {/* user comment area section ends */}
            <a href="#" className="">
              <ShareIcon style={{ color: '#fa521c' }} />
            </a>
            <a href="#" className="">
              <CommentIcon style={{ color: '#fa521c' }} />
            </a>
          </div>

          <div className="media"></div>
          {/* Widget section */}
          <div className="widget">
            {articles.map((article) => (
              <Category key={article.id} article={article} currentUser = {currentUser} onDelete={onDelete}/>
            ))}
          </div>

          {/* widget section ends */}
        </div>
      </div>
    </div>
  )
}
