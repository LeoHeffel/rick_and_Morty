import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function NavBar({onSearch}) {
    
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
 }

 