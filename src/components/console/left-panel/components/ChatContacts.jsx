import React from "react";

import SingleChatContact from './SingleChatContact';
import database from "./database";

function createChatContact(data) {
    return (
        <SingleChatContact
            key={data.id}
            name={data.name}
            img={data.img}
            lastMessage={data.recieved[0]}
        />
    )
}

export default function ChatContacts() {
    return (
        <div className="chat-contacts">
            {database.map(createChatContact)}
        </div>
    )
}