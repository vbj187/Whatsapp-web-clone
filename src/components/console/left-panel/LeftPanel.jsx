import React from "react";
import UserPane from "./components/UserPane";
import SearchChat from './components/SearchChat';

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <UserPane />
            <SearchChat />
        </div>
    )
}