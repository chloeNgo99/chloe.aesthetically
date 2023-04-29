import React, { useRef, useEffect, useState } from 'react';
import Contact from "./Components/Contact"
import Project from './Components/Project';
import Home from './Components/Home';
import Update from './Components/Update';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./Components/style.css"

export default function App() {

    const [scroll, setScroll] = useState(0);
  
    useEffect(() => {
      function handleScroll() {
        setScroll(window.pageYOffset);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    let bodyStyle = {};
    bodyStyle.transition = 'background-color 1.5s ease';
    if (scroll < 500) {
      bodyStyle = { background: 'linear-gradient(to top left, #F3F9D3, #F3D4E3, #D5DCEA)' };
      bodyStyle.transition = "background 1s ease-out";
    } else if (scroll >= 500 && scroll < 1800) {
      bodyStyle = { background: 'linear-gradient(to top left, #DFEBF5, #ECE0DC, #C8E5FD)' };
      bodyStyle.transition = "background 1s ease-out";
    } else {
      bodyStyle = { background: 'linear-gradient(to top left, #C6E2F1, #EADFF5, #EADFF5)' };
      bodyStyle.transition = "background 1s ease-out";
    }
  
  
  return (
    <div className='body' style={bodyStyle}>
      {/* <div className="container">
       style={{ background: "linear-gradient(to top left, #DBDBF3, #F6D3D7, #BFE1F4)" }}
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
        <Project/>
        <Update/>
        <Contact />
      </div>

    </div>

  );
}


