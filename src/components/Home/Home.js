import React from 'react'
import './Home.css'
// import Avatar from './images/avatar.png'
import Scrolldown from './Scrolldown';
import Shapes from './Shapes'; 
import Typed from 'typed.js';


const Home = () => {
  React.useEffect(() => {
    const typed = new Typed('.multiText', {
        strings: ['UW Student', 'Coder', 'Content Creator', 'Designer'],
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
    <section className="home" id="home">
      
      <img src='./images/avatar.png' alt='' className='intro__img content-div'/>

      <div className='intro content-div'>
        <h1 className='home__name'>✨Aesthetically Chloe✨</h1>
        <p>I'm a <span className="multiText" ></span></p>
      </div>

      <div className='home__social content-div'>
        <a href='https://github.com/chloeNgo99' target='_blank' className='social_link'>
          <i class="fa-brands fa-github"></i>
        </a>

        <a href='' target='_blank' className='social_link'>
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href='mailto:chloengo1704@gmail.com' target='_blank' className='social_link'>
          <i class="fa-regular fa-envelope"></i>
        </a>

        <a href='https://www.instagram.com/chloe.aesthetically/' target='_blank' className='social_link'>
          <i class="fa-brands fa-instagram"></i>
        </a>

      </div>
      <a href='#contact' className='btn content-div'>Connect With Me</a>
      <Scrolldown />
      <Shapes />
    </section>
  )
}

export default Home