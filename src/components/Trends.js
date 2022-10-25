import React from 'react';
import "../css/Trends.css";
import Follow from './Follow';
import Suggestion from './Suggestion';

export default function Trends() {
    return (
    <div className='Rightsidebar'>
        <Suggestion/>
        <Follow/>

    </div>

    )
}
