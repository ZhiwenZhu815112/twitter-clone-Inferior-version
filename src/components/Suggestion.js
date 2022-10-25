import React from 'react';
import "../css/Suggestion.css";



export default function Suggestion() {
    return (
        <div>
                <div className="trends-for-you">
                    <div className="trends-for-you__block">
                        <div className="trends-for-you__heading">
                            Trends for you
                        </div>
                    </div>
                    <div className="trends-for-you__block">
                        <div className="trends-for-you__meta-information">
                            Trending in Europe
                        </div>
                        <div className="trends-for-you__trend-name">
                            #Iphone 14 pro
                        </div>
                        <div className="trends-for-you__meta-information">
                            155K Tweets
                        </div>
                    </div>
                    
                    <div className="trends-for-you__block">
                        <div className="trends-for-you__meta-information">
                            Trending in US
                        </div>
                        <div className="trends-for-you__trend-name">
                            #Iphone 14 pro Max
                        </div>
                        <div className="trends-for-you__meta-information">
                            158K Tweets
                        </div>
                    </div>
                </div>
            </div>
        )
}
