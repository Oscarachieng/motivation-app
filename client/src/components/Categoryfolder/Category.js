import React,{useState} from 'react'

import './Category.css'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

export default function Category({ article }) {

  const [numberOfLikes, setNumberOfLikes] = useState(article.likes)
  
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
  }).then(response =>response.json()).then(updatedArticle =>setNumberOfLikes(updatedArticle.likes)).catch()
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
            <h6 className="card-title">
              {article.user.first_name + ' ' + article.user.last_name}
            </h6>
            <p className="text-muted mb-1">{article.category.category}</p>
          </div>
        </div>

        <p className="card-text">{article.content}</p>
        <div className="media d-flex text-muted">
        <a className="" onClick={handleOnLikeClick}>
          <ThumbUpIcon style={{ color: '#fa521c' }} />
        </a>
        <h6>{numberOfLikes}</h6>
        </div>
       
        <a href="#" className="">
          <ShareIcon style={{ color: '#fa521c' }} />
        </a>
        <a href="#" className="">
          <CommentIcon style={{ color: '#fa521c' }} />
        </a>
      </div>
    </div>
  )
}
