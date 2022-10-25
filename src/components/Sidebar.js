import React, { useState } from 'react';
import "../css/Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import { Button } from "@material-ui/core";
import SidebarOptions from './SidebarOptions';
import { useAuth } from "../server/firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function Sidebar() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();


    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/login");

        }catch {
            setError("Failed to log out");
        }
    }

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon'/>


            <SidebarOptions active Icon={HomeIcon} text="home" Link={"/home"}/>
            <SidebarOptions Icon={NotificationsIcon} text="Notifications" Link={"/home/Message"}/>
            <SidebarOptions Icon={FaceIcon} text="profile" Link={"/"}/>

            <Button variant='outlined' className='sidebar__tweet' fullWidth>
                Tweet
            </Button>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>{currentUser.email}
            <Button variant='link' onClick={handleLogout} className="sidebar__tweet">Log out</Button>
        </div>
    );
}
