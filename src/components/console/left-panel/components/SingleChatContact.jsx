import React from "react";

import Avatar from '@material-ui/core/Avatar';


export default function SingleChatContact({ name, lastMessage, img, handleClick }) {

    return (
        <div className="single-chat-contact" onClick={handleClick}>
            <div className="chat-contacts-avatar-encloser">
                <Avatar
                    fontSize="large"
                    alt="Profile Picture"
                    src={img}
                />
            </div>
            <div className="chat-contacts-name-last-message">
                <h3>{name}</h3>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}