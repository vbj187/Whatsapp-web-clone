import React from "react";
import ProfilePicture from "../../../mini-components/ProfilePicture";

import NewChatIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function UserPane() {
    return (
        <div className="userPane">
            <ProfilePicture />
            <div className="left-panel-optioins">
                <NewChatIcon />
                <MoreVertIcon />
            </div>
        </div>
    )
}