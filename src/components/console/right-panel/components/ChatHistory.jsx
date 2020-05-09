import React from "react";

export default function ChatHistory({ user }) {
    return (
        <div className="chat-history-box">
            {user.messages.map(message => {
                if (message.type === 'sent') {
                    return <p className="text-message-wrapper sent-message">{message.text}</p>
                } else {
                    return <p className="text-message-wrapper recieved-message">{message.text}</p>
                }
            })}
        </div>
    )
}