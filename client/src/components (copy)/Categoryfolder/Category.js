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
const [showCommentForm, setShowCommentForm] = useState(false)
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


  function handleCommentClick() {
    setShowCommentForm(!showCommentForm)
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
    <div className="post">
      <div className="postWrapper">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={article.user.avatar_url.url}
            alt=" "
          />
          <div className="postCenter">
            <span className="postText1">
              {article.user.first_name + ' ' + article.user.last_name} </span> 

              <span className="postText2">
              {article.category.category} 
            </span>
            <span className="postText3">
              {article.title}
            </span>
          </div>
        </div>

        <span className="postText">{article.content}</span>

        {/* like section */}
        <div className="postBottom">
          <div className='postBottomLeft'>
            <ThumbUpIcon onClick={handleOnLikeClick}/>
            <span className="postLikeCounter">
            {numberOfLikes}
          </span>
          </div>          
          <CommentIcon style={{color:'fa521c'}} onClick={handleCommentClick} />          
          {enableEdit?<>
          <DeleteOutlineOutlinedIcon onClick={() => handleDeleteArticle(article)} style={{ color: '#fa521c' }}/>
          <FlagOutlinedIcon onClick={handleOnFlagClick} />
          </>: null}


        </div>
      
        {showCommentForm ? <Commentary currentUser={currentUser} article={article} /> : null}
      </div>
    </div>
  )
}
