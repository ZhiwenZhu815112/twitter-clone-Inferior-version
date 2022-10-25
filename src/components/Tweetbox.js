import React from 'react';
import "../css/Tweetbox.css";
import {Avatar, Button} from "@material-ui/core";

export default function Tweetbox({sendTweet, setTweetMessage,tweetMessage,tweetImage,setTweetImage}) {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://gravatar.com/avatar/06023639f7ede702b0720745c51e9925?s=400&d=robohash&r=x" />
                <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="type something here!"type="text"/>
                </div>
                <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Please put gif url in it" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
