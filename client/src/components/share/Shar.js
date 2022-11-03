import React, { useEffect, useState } from 'react'
import "./Share.css";
import TelegramIcon from '@mui/icons-material/Telegram'
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share({ currentUser, articles}) {
  // const [showArticleCreationForm, setShowArticleCreationForm] = useState(false)


  // const [articleDetails, setArticleDetails] = useState({
  //   title: '',
  //   content: '',
  //   is_approved: true,
  //   likes: 0,
  //   is_flagged: true,
  //   category_id: 1,
  //   user_id: currentUser.id,
  // })
  const [categories, setCategories] = useState([])

  // function handleOnchange(event) {
  //   setArticleDetails({
  //     ...articleDetails,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   fetch('/articles', {
  //     method: 'POST',
  //     body: JSON.stringify(articleDetails),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((post) => console.log(post))
  // }
  // function handlePostClick(e) {
  //   setShowArticleCreationForm(!showArticleCreationForm)
  // }
  
  return (
    <div className="share">
        {/* <button className="postbutton" 
        // onClick={handlePostClick}
        >
              Post
            </button> */}
            {/* {showArticleCreationForm ? ( */}
      <form 
      // onSubmit={handleSubmit} 
      className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" 
          // src={currentUser.avatar_url.url} 
          alt="" />
          <span className="postLikeCounter">
          {/* {currentUser.first_name + ' ' + currentUser.last_name} */}

          </span>
          <input
                  name="title"
                  className="form-control"
                  id="textArea"
                  placeholder="Article Title"
                  // value={articleDetails.title}
                  // onChange={handleOnchange}
                />
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
            name="content"
            // value={articleDetails.content}
            // onChange={handleOnchange}
          />
          <select name="category">
                  <option>Select the article category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category}
                    </option>
                  ))}
                </select>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
    
            </div>
            <button className="shareButton"><TelegramIcon /></button>
        </div>
      </form> 
      {/* ) : null} */}
    </div>
  );
}