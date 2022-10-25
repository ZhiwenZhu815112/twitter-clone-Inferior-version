import React from 'react';
import Tweetbox from './Tweetbox';
import TweetPost from './TweetPost';
import "../css/MainContents.css";


export default function MainContents({posts, userid}) {
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h2>Home</h2>
            </div>
            <Tweetbox userid={userid}/>

            {posts.map((post) => (
                <TweetPost 
                key={post.time}
                displayName={post.displayName}
                username={post.username}
                Avatars={post.Avatars}
                image={post.image}
                text={post.text}
                time={post.time}
                verified={post.verified} />
            ))}
            
        </div>
    )
}
