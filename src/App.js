import React, { Component, useEffect, useState } from 'react';
import Contact from "./Components/Contact"
import Project from './Components/Project';
import Update from './Components/Update'
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import "./Components/style.css"

//<NavBar class="header"/>
//<NavBar class="header"/>
//<Media class="media"/>


export default function App() {
  return (
    <>
      {/* <NavBar />
      <Media/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Project/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Update' element={<Update/>} />
      </Routes>
    </>

  );
}


