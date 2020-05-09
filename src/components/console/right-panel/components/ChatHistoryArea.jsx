import React from "react";

import ChatRecipientBar from "./ChatRecipientBar";
import ChatHistory from "./ChatHistory";
import ChatBox from "./ChatBox";

export default function ChatHistoryArea({ user }) {
    return (
        <div className="chat-history-area">
            <ChatRecipientBar user={user} />
            <ChatHistory user={user} />
            <ChatBox />
        </div>
    )
}