import React, { useState, useEffect } from 'react';
import './Commentary.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import TelegramIcon from '@mui/icons-material/Telegram'



export default function Commentary({article, currentUser}) {
  console.log(article)
  console.log(currentUser)
  const [commentData, setCommentData] = useState({ comment:'', article_id:article.id, user_id:currentUser.id })
  const [errors, setErrors] = useState([])
  const [numberOfLikes, setNumberOfLikes] = useState(26)
  const [deleteComment, setDeleteComment] = ([])




  function handleOnchange(event) {
    setCommentData({
      ...commentData,
      [event.target.name]: event.target.value,
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch('/article_comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    })
    const newComment = await response.json()
        if (response.ok) {
          console.log(newComment);
        } else {
          setErrors([newComment.errors]);
        }
  }




  function handleOnLikeClick(){
    let likes = article.likes + 1
    // likes += 1
    console.log(likes)
    fetch(`/like`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify({
        id:article.id,
        likes:likes
      })
    }).then(response =>response.json()).then(updatedComment =>setNumberOfLikes(updatedComment.likes)).catch()
  }


  // Delete comment

  useEffect(() => {
    fetch('/article_comments').then((r) => {
      if (r.ok) {
        r.json().then((deleteComment) => setDeleteComment(deleteComment))
      }
    })
  }, []) 
  function handleDeleteComment(comment){
    // e.preventDefault()
    console.log(comment)
    fetch(`/article_comments/${comment.id}`, {
      method: 'DELETE',
    //   body: JSON.stringify(userData),
    
    })
    .then((r) => r.json())
    .then((deletedcomment) => { 
        const updatedList= deleteComment.filter((comment) => article.id !== deletedcomment.id);
        setDeleteComment(updatedList);
    });
  }
  // Delete comment

  return (
    <div>
         {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      <form onSubmit={handleSubmit} className="comment">
          {/* <div className="bio-link" >
              <img
                id="image"
                className="rounded-circle img-fluid"
                src= {currentUser.avatar_url.url}
                alt="avatar"
              />
              <h5 className="card-title">
                {currentUser.first_name + " " + currentUser.last_name}
              </h5>
            </div>   */}
        <textarea
          name="content"
          className="form-control text-black  mt-3"
          id="textArea"
          rows=""
          value={commentData.comment}
          onChange={handleOnchange}
        ></textarea>
        <div>
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
          <CommentIcon style={{ color: '#FA521C' }} />
      
          <DeleteOutlineOutlinedIcon onClick= {() => handleDeleteComment(article)} style={{ color: '#fa521c' }} />
         
      
        
        </div>
        <button className="btn-rounded float-end" type="submit"
          value="Send"
          style={{ color: '#FA521C' }}>
          <TelegramIcon   
          /></button>
       
        </div>
  
        
  
    
      </form>
    </div>
  )
}