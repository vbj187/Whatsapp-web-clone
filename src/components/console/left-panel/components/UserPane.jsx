import React from "react";
import ProfilePicture from "../../../mini-components/ProfilePicture";

import NewChatIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';


export default function UserPane() {
    return (
        <div className="userPane">
            <div className="nameAndPic">
                <Avatar alt="Profile Picture" src="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <h3 id="defaultUserName">Vigneshwaran</h3>
            </div>
            <div className="left-panel-optioins">
                <NewChatIcon fontSize="normal" />
                <MoreVertIcon fontSize="normal" />
            </div>
        </div>
    )
}