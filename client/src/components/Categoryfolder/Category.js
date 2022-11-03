import React, { useState,useEffect } from 'react'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import './Category.css'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Commentary from '../ArticleComments/Commentary'

export default function Category({ article,onDelete, currentUser }) {
const [numberOfLikes, setNumberOfLikes] = useState(article.likes)
const [showCommentary, setShowCommentary] = useState(false)
const [showFlag, setShowFlag] = useState(false)
const [enableEdit,setEnableEdit]= useState(false) 


useEffect(()=>{
  if(currentUser.user_category === "staff"){
    setEnableEdit(true)
  }
},[])

  function handleOnLikeClick() {
    let likes = article.likes + 1
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
    if(window.confirm("Really want to flag it!")){
    fetch(`/articles/${article.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        is_flagged:false
      }),
    }).then(response=> {
       if(response.ok){
        response.json().then(data=>{
          alert("The post has been flagged")
          setShowFlag(!showFlag)
        })
      }else{
        response.json().then(error=>console.log(error))
      }})
    }else{
     return null
    }

  }


  function handleCommentClick(e) {
    setShowFlag(!showFlag)
  }
  

  function handleDeleteArticle(article) {
   if(window.confirm("Sure to delete it?")){
    fetch(`/articles/${article.id}`, {
      method: 'DELETE',
    })
      .then((response =>{
      if(response.ok){        
          onDelete(article)   
          alert("The post was deleted.")   
      }
      else{
        response.json().then(error=>console.log(error))
      }}))
    }
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
            <h6 className="text mb-1" style={{ color: '#fa521c', fontSize: '13px' }} >
              {article.user.first_name + ' ' + article.user.last_name +'  .'+article.category.category} 

            </h6>
            <p className="text mb-1" style={{ color: '#fa521c', fontSize: '15px' }}>
              {article.title}
            </p>
          </div>
        </div>

        <p className="card-text">{article.content}</p>

        {/* like section */}
        <div className="media d-flex text-muted" style={{ fontSize: '12px' }}>
          <div className='d-flex'>
            <ThumbUpIcon style={{ color: '#fa521c' }} onClick={handleOnLikeClick}/>
            <h6 className="text-sm" style={{ fontSize: '12px' }}>
            {numberOfLikes}
          </h6>
          </div>          
          <ShareIcon style={{ color: '#fa521c' }} />
          <CommentIcon  onClick={handleCommentClick} style={{ color: '#fa521c' }} />          
          {enableEdit?<>
          <DeleteOutlineOutlinedIcon onClick={() => handleDeleteArticle(article)} style={{ color: '#fa521c' }}/>
        <FlagOutlinedIcon style={{ color: '#fa521c' }}  onClick={handleOnFlagClick} />
        </>: null}


        </div>
        {/* like section ends */}
       
  
  
        {showCommentary ? <Commentary currentUser={currentUser} article={article} /> : null}
      </div>
    </div>
  )
}
