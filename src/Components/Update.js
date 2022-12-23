import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"

export default function Project() {
    return (
        <div className='body' style={{ background: "linear-gradient(to top left, #DBDBF3, #F6D3D7, #BFE1F4)" }}>
            <div className="container">
                <div className="header">
                    {/* <NavBar /> */}
                </div>
                <div className="media">
                    <Media />
                </div>
                <div className="content">
                    <p>Update Under Contruction</p>
                </div>
                <div class="footer">
                    <p>footer</p>
                </div>
            </div>
        </div>
    )

}