import React, { useState } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import CommentIcon from '@mui/icons-material/Comment'
import TelegramIcon from '@mui/icons-material/Telegram'


export default function Commentary() {
  const [comment, setComment] = useState({ comments })

  function handleOnchange(event) {
    setArticleDetails({
      ...articleDetails,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/commentary', {
      method: 'POST',
      body: JSON.stringify(articleDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((post) => console.log(post))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-outline ">
        <textarea
          name="content"
          className="form-control text-black opacity-50 mt-3"
          id="textArea"
          rows=""
          value={articleDetails.content}
          onChange={handleOnchange}
        ></textarea>
        <a href="#" className="">
          <ShareIcon style={{ color: '#fa521c' }} />
        </a>
        <a href="#" className="">
          <CommentIcon style={{ color: '#fa521c' }} />
        </a>
        <button
          className="btn-rounded float-end"
          type="submit"
          value="Send"
          style={{ color: '#fa521c' }}
        >
          <TelegramIcon />
        </button>
      </form>
    </div>
  )
}
