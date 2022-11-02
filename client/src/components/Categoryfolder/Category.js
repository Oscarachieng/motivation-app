import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Category.css'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Commentary from '../ArticleComments/Commentary'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'

export default function Category({ article, currentUser }) {
  const [numberOfLikes, setNumberOfLikes] = useState(article.likes)
  const [showCommentary, setShowCommentary] = useState(false)
  const [deleteArticle, setDeleteArticle] = useState([])
  const [showFlag, setShowFlag] = useState(false)

  function handleOnLikeClick() {
    let likes = article.likes + 1
    // likes += 1
    console.log(likes)
    fetch(`/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: article.id,
        likes: likes,
      }),
    })
      .then((response) => response.json())
      .then((updatedArticle) => setNumberOfLikes(updatedArticle.likes))
      .catch()
  }

  function handleOnFlagClick(e) {
    fetch('/articles', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: article.id,
      }),
    }).then((response) => response.json())
    alert('This post is flagged')
    setShowFlag(!showFlag)
  }

  function handleCommentClick(e) {
    setShowFlag(!showFlag)
  }

  // delete article

  useEffect(() => {
    fetch('/articles').then((r) => {
      if (r.ok) {
        r.json().then((deleteArticle) => setDeleteArticle(deleteArticle))
      }
    })
  }, [])

  function handleDeleteArticle(article) {
    //  e.preventDefault()
    console.log(article)
    fetch(`/articles/${article.id}`, {
      method: 'DELETE',
      //   body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((deletedarticle) => {
        const updatedList = deleteArticle.filter(
          (article) => article.id !== deletedarticle.id,
        )
        setDeleteArticle(updatedList)
      })
  }
  // delete article ends

  return (
    <div className="card" id="userbox">
      <div className="card-body" id="userbox">
        {/* <div className="d-flex" id="prof">
          <img
            id="imw-wd"
            className="rounded-circle img-fluid"
            src={article.user.avatar_url.url}
            alt="avatar"
            style={{ size: '80px' }}
          />
          <div className="mt-2">
            <h6
              className="text mb-1"
              style={{ color: '#fa521c', fontSize: '12px' }}
            >
              {article.user.first_name + ' ' + article.user.last_name}
            </h6>
            <p
              className="text mb-1"
              style={{ color: '#fa521c', fontSize: '10px' }}
            >
              {article.category.category}
            </p>
          </div>
        </div> */}
        <div className="articlesection">
          <p className="card-text">{article.content}</p>
        </div>

        <div className="media d-flex text-muted" style={{ fontSize: '12px' }}>
          {/* like section */}
          <div className="d-flex">
            <ThumbUpIcon
              onClick={handleOnLikeClick}
              style={{ color: '#fa521c' }}
            />

            <h6 className="text-sm" style={{ fontSize: '12px' }}>
              {numberOfLikes}
            </h6>
          </div>
          {/* like section ends */}
          <ShareIcon style={{ color: '#fa521c' }} />

          <CommentIcon
            onClick={handleCommentClick}
            style={{ color: '#fa521c' }}
          />

          <DeleteOutlineOutlinedIcon
            onClick={() => handleDeleteArticle(article)}
            style={{ color: '#fa521c' }}
          />
          <FlagOutlinedIcon
            style={{ color: '#fa521c' }}
            onClick={handleOnFlagClick}
          />
        </div>

        {showCommentary ? (
          <Commentary currentUser={currentUser} article={article} />
        ) : null}
         {/* {showFlag ? (
          {if {currentUser.category} === staff}
        ) : null} */}
      </div>
    </div>
  )
}
