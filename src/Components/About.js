import React from "react"
import Typed from 'typed.js';

export default function About() {
    React.useEffect(() => {
        const typed = new Typed('.multiText', {
            strings: ['Student', 'Developer', 'Content Creator', 'Designer'],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true,
            backDelay: 1000
        });
        return () => {
            typed.destroy();
        }
    }, [])
   
    return (
        <div className="about"> 
            <h1>I'm a <span className="multiText" >Coder</span></h1>
            <div className="About">
                <p> Wow, hi there! I'm Chloe! 👋🏻😬 I am so excited to welcome you to my first 3D interactive website!
                    <br/>
                    <br/>
                    As a computer science major at the University of Washington, I have always had a burning passion for art and creativity. 
                    I've never taken any formal classes in art, but that hasn't stopped me from pursuing my love for it. Now, I am thrilled 
                    to finally have the opportunity to combine my technical skills with my passion for art and create something truly unique 
                    and special for others to enjoy. I hope that you will find this website to be a cozy and relaxing place to explore.
                    <br/>
                    <br/>
                    In the future, I am beyond excited to transition into full stack or front-end developer, so that I can continue to bring my passion for art 
                    to the digital world and create even more amazing experiences for people.
                    <br/>
                    <br/>
                    One more thing! The website is still in the development stage 🤧, but I am working hard to complete it by the end of Jan. 
                    In the meantime, you can also check out my Instagram for more of my creative work! Thank you so much for visiting 
                    and I can't wait to see you there!
                </p>
            </div>

        </div>
    )

}