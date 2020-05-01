import React from "react";
import UserPane from "./components/UserPane";
import SearchChat from './components/SearchChat';
import ChatContacts from "./components/ChatContacts";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <UserPane />
            <SearchChat />
            <ChatContacts />
        </div>
    )
}