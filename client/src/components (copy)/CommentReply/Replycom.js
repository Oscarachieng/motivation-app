import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import TelegramIcon from '@mui/icons-material/Telegram'
export default function Replycom({comment, currentUser}) {
  const [replyData, setReply] = useState({ reply:'',article_comment_id:comment.id, user_id:currentUser.id })
  const [errors, setErrors] = useState([])
  const [numberOfLikes, setNumberOfLikes] = useState(comment.likes)
  function handleOnchange(event) {
    setReplyData({
      ...replyData,
      [event.target.name]: event.target.value,
    })
  }
   async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch('/article_comments', {
      method: 'POST',
      body: JSON.stringify(replyData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    });
    const data = await response.json()
        if (r.ok) {
          setReply(newReply);
        } else {
          setErrors([er.errors]);
        }
  }
  async function handleOnLikeClick(){
    let likes = article_comment_reply.likes + 1
    // likes += 1
    console.log(likes)
   const res = await fetch(`/like`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify({
        id:article_comment_reply.id,
        likes:likes
      })
    });
    const updatedReply = await res.json();
    if (res.ok){
      setNumberOfLikes(updatedReply.likes)
    } else {
      console.log(er.errors)
    }
  }
  return (
    <div>
         {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      <form onSubmit={handleSubmit} className="form-outline ">
        <textarea
          name="content"
          className="form-control text-black opacity-50 mt-3"
          id="textArea"
          rows=""
          value={commentData.comment}
          onChange={handleOnchange}
        ></textarea>
        <div>
        <a className="" onClick={handleOnLikeClick}>
          <ThumbUpIcon style={{ color: '#FA521C' }} />
        </a>
        <h5>{numberOfLikes}</h5>
        </div>
        <a href="#" className="">
          <CommentIcon style={{ color: '#FA521C' }} />
        </a>
        <button
          className="btn-rounded float-end"
          type="submit"
          value="Send"
          style={{ color: '#FA521C' }}
        >
          <TelegramIcon />
        </button>
      </form>
    </div>
  )
}