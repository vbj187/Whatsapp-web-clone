import React from "react";
import ChatRecipientBar from "./components/ChatRecipientBar"
import ChatBox from "./components/ChatBox";

export default function RightPanel() {
    return (
        <div className="right-panel">
            <ChatRecipientBar />
            <ChatBox />
        </div>
    )
}