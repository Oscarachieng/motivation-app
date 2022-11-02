import React, { useState, useEffect } from 'react'
import './post.css'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Commentary from '../ArticleComments/Commentary'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function Post({ article, currentUser }) {
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

  // // delete article

  // useEffect(() => {
  //   fetch('/articles').then((r) => {
  //     if (r.ok) {
  //       r.json().then((deleteArticle) => setDeleteArticle(deleteArticle))
  //     }
  //   })
  // }, [])

  // function handleDeleteArticle(article) {
  //   //  e.preventDefault()
  //   console.log(article)
  //   fetch(`/articles/${article.id}`, {
  //     method: 'DELETE',
  //     //   body: JSON.stringify(userData),
  //   })
  //     .then((r) => r.json())
  //     .then((deletedarticle) => {
  //       const updatedList = deleteArticle.filter(
  //         (article) => article.id !== deletedarticle.id,
  //       )
  //       setDeleteArticle(updatedList)
  //     })
  // }
  // // delete article ends

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          {/* <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={article.user.avatar_url.url}
              alt=""
            />
            <span className="postUsername">
              {article.user.first_name + ' ' + article.user.last_name}
            </span>
            <span className="postDate">{post.date}</span>
          </div> */}
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{article.content}</span>
          {/* <img className="postImg" src="" alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon onClick={handleOnLikeClick} style={{}} />
            <span className="postLikeCounter">{numberOfLikes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              <CommentIcon onClick={handleCommentClick} style={{}} />
            </span>
          </div>
          {showCommentary ? (
            <Commentary currentUser={currentUser} article={article} />
          ) : null}
          {/* {showFlag ? (
          {if {currentUser.category} === staff}
        ) : null} */}
        </div>
      </div>
    </div>
  )
}
