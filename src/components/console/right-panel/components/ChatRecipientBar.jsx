import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import AttachFileIcon from '@material-ui/icons/AttachFile';


export default function ChatRecipientBar() {
    return (
        <div className="chat-recipient-bar flex-end-chatarea">
            <div className="recipient-name-pic">
                <button><Avatar alt="Profile Picture" src="https://images.pexels.com/photos/2934208/pexels-photo-2934208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /></button>
                <h3 id="recipientUserName">Pug</h3>
            </div>
            <div className="recipient-right-panel-options">
                <button><SearchIcon fontSize="normal" /></button>
                <button><AttachFileIcon fontSize="normal" /></button>
                <button><MoreVertIcon fontSize="normal" /></button>
            </div>
        </div >
    )
}