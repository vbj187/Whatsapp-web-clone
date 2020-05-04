import React from "react";



import Avatar from '@material-ui/core/Avatar';

export default function SingleChatContact(props) {
    return (
        <div className="single-chat-contact">
            <div className="chat-contacts-avatar-encloser">
                <Avatar
                    fontSize="large"
                    alt="Profile Picture"
                    src="https://images.pexels.com/photos/2934208/pexels-photo-2934208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
            </div>
            <div className="chat-contacts-name-last-message">
                <h3>Pug</h3>
                <p>Woof woof</p>
            </div>
        </div>
    )
}