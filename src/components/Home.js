import React, { useState, useEffect } from 'react';
import "../css/Home.css";
import Sidebar from './Sidebar';
import MainContents from './MainContents';
import Trends from './Trends';
import { db } from "../server/firebase"; 

export default function Home() {
  const [posts, setPosts] = useState([]);;
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

// should inject the user infor after user creat the account
// and pass through the uid to determined whether nor not match the uid with current user id.
// if it match get displayName and username from db. and use it.


// basic example of how to write and read data from cloud base 
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => doc.data())) );
    }, []);


  const sendTweet = (e) => {
    e.preventDefault();
  
    db.collection("posts").add({
        displayName: "user", //should be whatever user's displayName from database
        username: "userid", // same
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        Avatars:"https://gravatar.com/avatar/06023639f7ede702b0720745c51e9925?s=400&d=robohash&r=x",
        time: Date(),
    });
  
      setTweetMessage("");
      setTweetImage("");
  };

  return (
    <div className='app'>
      <Sidebar/>
      <MainContents posts={posts}/>
      <Trends sendTweet={sendTweet} 
      setTweetMessage={setTweetMessage} 
      tweetMessage={tweetMessage} 
      tweetImage={tweetImage}
      setTweetImage={setTweetImage}/>
    </div>
  )
}

