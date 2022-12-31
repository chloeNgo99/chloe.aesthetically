import React, { useEffect, useState } from "react"

export default function NavBar(){

    // const [color, setColor] = useState("white");
    // const click = color =>{
    //     setColor(color);
    // }
    // useEffect(() => {
    //     document.nav.color = color;
    // }, [color]);

    return(
        <nav>
           <a href='#homeSection'>HOME</a>
           <a href='#projectSection'>PROJECTS</a>
           <a href='#updateSection'>UPDATE</a>
           <a href="#contactSection">CONTACT</a>
        </nav>
    )
    
}