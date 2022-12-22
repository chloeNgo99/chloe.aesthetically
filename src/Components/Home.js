import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"
import About from "./About"
import Tittle from './Tittle';

export default function Home() {
  return (
    <div className='body' style={{background:"linear-gradient(to top left, #DBDBF3, #F6D3D7, #BFE1F4)"}}>
      <div className="container">
        <div className="header">
          <NavBar/>
        </div>
        <div className="media">
          <Media />
        </div>
        <div className="content">
          <Tittle />
        </div>
        <div class="footer">
          <About />
        </div>
      </div>

    </div>
  );
}