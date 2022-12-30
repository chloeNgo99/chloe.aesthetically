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
           <a className="home" href='#homeSection'>HOME</a>
           <a className="project" href='#projectSection'>PROJECTS</a>
           <a className="contact">CONTACT</a>
           <a className="update" href='/Update'>UPDATE</a>
        </nav>
    )
    
}