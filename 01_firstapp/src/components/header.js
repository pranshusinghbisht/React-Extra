import React from "react";

function Header({name,title}){
    return(
        <div>
        <h1>Header</h1>
        <p1>This is name: {name}</p1>
        <br/>
        <p1>This is title: {title}</p1>
        </div>
    )
}

export default Header;