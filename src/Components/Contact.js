import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"

export default function Project() {
    return (
        <div className='body' style={{ background: "linear-gradient(to top left, #9ABCA2, #C2C1A2, #B8CFD3)" }}>
            <div className="container">
                <div className="header">
                    {/* <NavBar /> */}
                </div>
                <div className="media">
                    <Media />
                </div>
                <div className="content">
                    <p>Contact Under Contruction</p>
                </div>
                <div class="footer">
                    <p>footer</p>
                </div>
            </div>
        </div>
    )

}