import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import TelegramIcon from '@mui/icons-material/Telegram'



export default function Commentary({article, currentUser}) {
  const [commentData, setCommentData] = useState({ comment:'', article_id:article.id, user_id:currentUser.id,likes:0 })
  const [errors, setErrors] = useState('')
  const [postComments,setPostComments]  = useState(article.article_comments)
  const [numberOfLikes, setNumberOfLikes] = useState(26)

  function handleOnCommentchange(event) {
    setCommentData({...commentData,[event.target.name]: event.target.value})
  }


 function handleCommentSubmit(e) {
    e.preventDefault()
      fetch('/article_comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Accept": 'application/json',
      },
      body:JSON.stringify(commentData)

    }).then(response=>{
      if(response.ok){
      response.json().then(newArticleComment=>{
        setPostComments([newArticleComment,...postComments])
       setCommentData({ comment:'', article_id:article.id, user_id:currentUser.id,likes:0 })
      })
     }else{
      response.json().then(error=>setErrors(error.errors[0]))
     }
    }
    )
  }

  function handleOnLikeClick(){
    let likes = article.likes + 1
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
  return (
    <div>
    
      <form onSubmit={handleCommentSubmit} className="form-outline ">
        <textarea
          name="comment"
          className="form-control text-black opacity-20 mt-8"
          id="textArea"
          rows=""
          placeholder='Say something....'
          value={commentData.comment}
          onChange={handleOnCommentchange}
        ></textarea>
        <p style={{color:"red"}}>{errors}</p>
        <div>
        <ul style={{color:"white",listStyle:"disc"}}>
          {postComments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
        </ul>

        <a className="" onClick={handleOnLikeClick}>
          <ThumbUpIcon style={{ color: '#FA521C' }} />
        </a>
        <h5>{numberOfLikes}</h5>
        <a href="#" className="">
          <CommentIcon style={{ color: '#FA521C' }} />
        </a>
        </div>
        
        <button className="btn-rounded float-end" type="submit" value="Send" style={{ color: '#FA521C' }}>
         Reply
        </button>
      </form>
    </div>
  )
}