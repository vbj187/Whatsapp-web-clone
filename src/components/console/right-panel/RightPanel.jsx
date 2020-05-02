import React from "react";
import ChatRecipientBox from "./components/ChatRecipient";
import ChatHistory from "./components/ChatHistory";
import ChatBox from "./components/ChatBox";

export default function RightPanel() {
    return (
        <div className="right-panel">
            <ChatRecipientBox />
            <ChatHistory />
            <ChatBox />
        </div>
    )
}