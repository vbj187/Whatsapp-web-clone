import React from "react";
import SearchIcon from '@material-ui/icons/Search';

export default function SearchChat() {
    return (
        <div className="left-panel-search">
            <SearchIcon fontSize="large" />
            <div>
                <input
                    className="search-input-left-panel"
                    type="search"
                    placeholder="search chat or contact"
                />
            </div>
        </div>
    )
}