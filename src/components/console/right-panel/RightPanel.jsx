import React from "react";
import ChatHistoryArea from "./components/ChatHistoryArea";
import DefaultNoHistory from "./components/DefaultNoHistory";


export default function RightPanel({ selectedContactId }) {
    return (
        <div className="right-panel">
            {selectedContactId == null ? <DefaultNoHistory /> : <ChatHistoryArea />}
        </div>
    )
}
