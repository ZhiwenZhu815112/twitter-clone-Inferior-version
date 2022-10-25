import React from 'react';
import "../css/TweetPost.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReplayIcon from '@mui/icons-material/Replay';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoodIcon from '@mui/icons-material/Mood';
import { Avatar } from "@material-ui/core";


export default function TweetPost({displayName,username, Avatars, image, text, time, verified}) {
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar src={Avatars} />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @{username}
                </span>
              </h3>
            </div>
            
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div>{"  "}{time}</div>
          <div className="post__footer">
            <ReplayIcon fontSize="small" />
            <CommentIcon fontSize="small" />
            <ThumbUpIcon fontSize="small" />
            <MoodIcon fontSize="small" />
          </div>
        </div>
      </div>
  )
}
