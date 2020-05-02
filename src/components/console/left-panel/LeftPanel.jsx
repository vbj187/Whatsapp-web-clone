import React from "react";

import UserPanel from "./components/UserPane";
import SearchChat from "./components/SearchChat";
import ChatContacts from "./components/ChatContacts";

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <UserPanel />
            <SearchChat />
            <ChatContacts />
        </div>
    )
}