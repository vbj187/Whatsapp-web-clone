import React from "react";
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default function ChatBox() {
    return (
        <div>
            <InsertEmoticonIcon />
            <AttachFileIcon />
            <SendIcon />
        </div>
    )
}