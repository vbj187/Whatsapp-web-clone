import React from "react";
import ChatHistoryArea from "./components/ChatHistoryArea";
import DefaultNoHistory from "./components/DefaultNoHistory";

let contactSelected = false;

export default function RightPanel() {
    return (
        <div className="right-panel">
            {!contactSelected ? <DefaultNoHistory /> : <ChatHistoryArea />}
        </div>
    )
}