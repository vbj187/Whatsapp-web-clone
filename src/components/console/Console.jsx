import React, { useState } from "react";

import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";

import database from "./database";

export default function Console() {

    const [users, setUsers] = useState(database);
    const [selectedContactId, setselectedContactId] = useState(null);

    return (
        <div className="complete-console">
            <LeftPanel users={users} setselectedContactId={setselectedContactId} />
            <RightPanel selectedContactId={selectedContactId} users={users} />
        </div>
    )
}