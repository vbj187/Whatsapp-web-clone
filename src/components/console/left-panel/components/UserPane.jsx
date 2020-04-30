import React from "react";
import ProfilePicture from "../../../mini-components/ProfilePicture";

import NewChatIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function UserPane() {
    return (
        <div className="userPane">
            <div className="nameAndPic">
                <ProfilePicture />
                <h3 id="defaultUserName">Vigneshwaran</h3>
            </div>
            <div className="left-panel-optioins">
                <NewChatIcon fontSize="large" />
                <MoreVertIcon fontSize="large" />
            </div>
        </div>
    )
}