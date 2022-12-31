import React, { Component, useEffect, useState } from 'react';
import Contact from "./Components/Contact"
import Project from './Components/Project';
import Home from './Components/Home';
import Update from './Components/Update';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Components/style.css"

export default function App() {
  return (
    <div className='body' style={{ background: "linear-gradient(to top left, #DBDBF3, #F6D3D7, #BFE1F4)" }}>
      {/* <div className="container">
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
      </div> */}
      <div className='container'>
        <Home />
        <Project />
        <Update/>
        <Contact />
      </div>

    </div>

  );
}


