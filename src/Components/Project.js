import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"

export default function Project() {
    return (
        <div className='body' style={{ background: "linear-gradient(to top left, #C8E5FD, #F9DBE1, #F1EEDA)" }}>

            <div className="container">
                <div className="header">
                    <NavBar />
                </div>
                <div className="media">
                    <Media />
                </div>
                <div className="content">
                    <p>content</p>
                </div>
                <div class="footer">
                    <p>footer</p>
                </div>
            </div>

        </div>
    )

}