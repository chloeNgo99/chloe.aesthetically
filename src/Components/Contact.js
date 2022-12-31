import React, { Component } from 'react';
import NavBar from "./NavBar"
import Media from "./Media"

export default function Contact() {
    function submitForm(){
        document.getElementById("contact-form").reset();
    }
    
    return (
        <>
            <div className='contact' id="contactSection">
                <h1>CONTACT</h1>
            </div>

            <div className='userInfo'>
                <form  name="contact-form" target="_blank" method="POST" action="https://formsubmit.co/7057a4e77b5519ef11231adb4a236cd9">
                    <ul>
                        <li>
                            <label>Name: </label>
                        </li>
                        <li>
                            <input type='text' name='name' placeholder='Your Name...'></input>
                        </li>
                        <li>
                            <label>Email: </label>
                        </li>
                        <li>
                            <input type='text' name='email' placeholder='Your Email...'></input>
                        </li>
                        <li>
                            <label>Message: </label>
                        </li>
                        <li>
                            <textarea type='text' name='message' placeholder='Send a Message...'></textarea>
                        </li>
                        <button onclick="submitForm()" className='submit' type="submit" name="submit">SEND</button>
                    </ul>
                </form>
            </div>
        </>
    )

}