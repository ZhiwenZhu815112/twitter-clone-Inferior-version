import React from 'react';
import "../css/Follow.css";
import { Avatar } from "@material-ui/core";

export default function Follow() {
    return (            
    <div className="who-to-follow">
        <div className="who-to-follow__block">
            <div className="who-to-follow__heading">
                Who to follow
            </div>
        </div>
        
        <div className="who-to-follow__block">
            <Avatar className="who-to-follow__author-logo" src="" alt=''/> 
            <div className="who-to-follow__content">
                <div>
                    <div className="who-to-follow__author-name">
                        Mark
                    </div>
                    
                    <div className="who-to-follow__author-slug">
                        @MA
                    </div>
                </div>
                <div className="who-to-follow__button">
                    Follow
                </div>
            </div>
        </div>

        <div className="who-to-follow__block">
            <Avatar className="who-to-follow__author-logo" src="" alt=''/>
            <div className="who-to-follow__content">
                <div>
                    <div className="who-to-follow__author-name">
                        KK
                    </div>
                    
                    <div className="who-to-follow__author-slug">
                        @kkwithnoheart
                    </div>
                </div>
                <div className="who-to-follow__button">
                    Follow
                </div>
            </div>
        </div>
    </div>
);
}
