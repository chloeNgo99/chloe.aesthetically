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
           <a className="home" href='/'>HOME</a>
           <a className="project" href ='/Projects'>PROJECTS</a>
           <a className="contact" href='/Contact'>CONTACT</a>
           <a className="update" href='/Update'>UPDATE</a>
        </nav>
    )
    
}