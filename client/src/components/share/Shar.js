import React from 'react'
import "./Share.css";
import TelegramIcon from '@mui/icons-material/Telegram'
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share({ currentUser, articles}) {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" 
          // src={currentUser.avatar_url.url} 
          alt="" />
          <span className="postLikeCounter">
          {/* {currentUser.first_name + ' ' + currentUser.last_name} */}

          </span>
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
          />
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
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton"><TelegramIcon /></button>
        </div>
      </div>
    </div>
  );
}