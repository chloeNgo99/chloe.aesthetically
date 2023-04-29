import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"
import About from "./About"

export default function Home() {

  return (
    //<div className='body' style={{background:"linear-gradient(to top left, #DBDBF3, #F6D3D7, #BFE1F4)"}}>
      <>
        <div className="header" id="homeSection">
          <NavBar/>  
        </div>
        <div className="media">
          <Media />
        </div>
        <div className="content">
          <div className="iframContent">
            <iframe src='https://my.spline.design/untitled-91de9edabf3cb964a13320761f4707fe/' frameborder='0'></iframe>
          </div>  
        </div>
        <div class="about">
          <About />
        </div>
      </>

    //</div>
  );
}