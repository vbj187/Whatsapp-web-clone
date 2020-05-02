import React from "react";

import NewChatIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

export default function UserPanel() {
    return (
        <div className="user-panel">
            <div className="username-picture">
                <button>
                    <Avatar
                        alt="Profile Picture"
                        src="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </button>
                <h3 id="defaultUserName">Vigneshwaran</h3>
            </div>
            <div className="left-panel-options">
                <button><NewChatIcon fontSize="normal" /></button>
                <button><MoreVertIcon fontSize="normal" /></button>
            </div>

        </div>
    )
}