import React from 'react';
import "../css/SidebarOptions.css";
import { useNavigate } from "react-router-dom";

export default function SidebarOptions({active, text, Icon, Link}) {
    const navigate = useNavigate();
    
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`} variant="link" onClick={() => navigate(Link)}>
            <Icon style={{height: "70px", width: "70px"}} />
            <h2>{text}</h2>
        </div>
    )
}
