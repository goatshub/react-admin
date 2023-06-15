import React from 'react'
import "./topbar.css"
import {Notifications, Language, Settings} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">DWP</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Notifications />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/9463151/pexels-photo-9463151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
