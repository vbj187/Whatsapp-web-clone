import React from "react";



import Avatar from '@material-ui/core/Avatar';

export default function SingleChatContact(props) {
    return (
        <div className="single-chat-contact">
            <div className="chat-contacts-avatar-encloser">
                <Avatar
                    fontSize="large"
                    alt="Profile Picture"
                    src={props.img}
                />
            </div>
            <div className="chat-contacts-name-last-message">
                <h3>{props.name}</h3>
                <p>{props.lastMessage}</p>
            </div>
        </div>
    )
}