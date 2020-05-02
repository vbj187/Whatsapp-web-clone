import React from "react";

import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";

export default function Console() {
    return (
        <div className="complete-console">
            <LeftPanel />
            <RightPanel />
        </div>
    )
}