import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Category.css'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Commentary from '../ArticleComments/Commentary'

export default function Category({ article, currentUser }) {
  const [numberOfLikes, setNumberOfLikes] = useState(article.likes)
const [showCommentary, setShowCommentary] = useState(false)
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
  function handleCommentClick(e){
    setShowCommentary (!showCommentary)
  }

  return (
    <div className="card" id="userbox">
      <div className="card-body">
        <div className="d-flex">
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
              style={{ color: '#fa521c', fontSize: '12px' }}
            >
              {article.category.category}
            </p>
          </div>
        </div>

        <p className="card-text">{article.content}</p>

        {/* like section */}
        <div className="media d-flex text-muted" style={{ fontSize: '12px' }}>
          <a className="" onClick={handleOnLikeClick}>
            <ThumbUpIcon style={{ color: '#fa521c' }} />
          </a>
          <h6 className="text-sm" style={{ fontSize: '12px' }}>
            {numberOfLikes}
          </h6>
        </div>
        {/* like section ends */}

        <a href="#" className="">
          <ShareIcon style={{ color: '#fa521c' }} />
        </a>
  
  
            <CommentIcon  onClick={handleCommentClick} style={{ color: '#fa521c' }} />
          
    

        <a href="#" className="">
          <DeleteOutlineOutlinedIcon style={{ color: '#fa521c' }} />
        </a>
        {showCommentary ? <Commentary currentUser={currentUser} article={article} /> : null}
      </div>
    </div>
  )
}
