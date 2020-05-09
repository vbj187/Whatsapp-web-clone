import React from "react";

import SingleChatContact from './SingleChatContact';

function createChatContact(data, setselectedContactId) {
    return (
        <SingleChatContact
            key={data.id}
            name={data.name}
            img={data.img}
            lastMessage={data.recentMessages}
            handleClick={() => setselectedContactId(data.id)}
        />
    )
}

export default function ChatContacts({ users, setselectedContactId }) {
    return (
        <div className="chat-contacts">
            {users.map(data => {
                return createChatContact(data, setselectedContactId)
            })}
        </div>
    )
}