import React from "react";
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

export default function ChatBox() {
    return (
        <div className="chat-box-panel flex-end-chatarea">
            <button><InsertEmoticonIcon /></button>
            <div className="chat-textarea-encloser">
                <input
                    className="chat-textArea"
                    type="text"
                    placeholder="Type your message"
                    id="chat-input-textarea"
                />
            </div>
            <div className="mic-send-encloser">
                <button><MicIcon /></button>
                <button><SendIcon /></button>
            </div>
        </div>
    )
}