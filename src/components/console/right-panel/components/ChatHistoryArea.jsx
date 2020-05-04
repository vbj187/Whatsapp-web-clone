import React from "react";

import ChatRecipientBar from "./ChatRecipientBar";
import ChatHistory from "./ChatHistory";
import ChatBox from "./ChatBox";

export default function ChatHistoryArea() {
    return (
        <div>
            <ChatRecipientBar />
            <ChatHistory />
            <ChatBox />
        </div>
    )
}