import React from "react";
import ChatRecipientBar from "./components/ChatRecipientBar"
import ChatBox from "./components/ChatBox";
import ChatHistory from "./components/ChatHistory";

export default function RightPanel() {
    return (
        <div className="right-panel">
            <ChatRecipientBar />
            <ChatHistory />
            <ChatBox />
        </div>
    )
}