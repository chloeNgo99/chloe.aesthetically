import React from 'react'
import './About.css'
import AboutBox from './AboutBox'
// import Avatar from './images/avatar.png'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section_title'>✨About Me✨</h2>
      <div className='about_container grid'>
        <img src='./images/avatar.png' alt="" className='about_img'/>
       
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>I am a CS student at the University of Washington with a passion for learning 
            and creating. Currently, I am honing my skills in Data Pipeline and AI. I have experience in 
            developing backend systems, full-stack webapp, and building complex database systems. I am a quick 
            learner, curious person, and always seeking growth opportunities.
            </p>
            <a href="" className='btn'>Download CV</a>
          </div>

          <div className='about_skill grid'>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>JAVA/C++</h3>
                <span className='skill_number'>90%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage pg_language'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>REACT.JS</h3>
                <span className='skill_number'>85%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage react'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>DATABASE</h3>
                <span className='skill_number'>87%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage databse'></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skill_name'>BACKEND DEVELOPMENT</h3>
                <span className='skill_number'>87%</span>
              </div>
              <div className='skill_bar'>
                <span className='skill_percentage backend_dev'></span>
              </div>
            </div>

          </div>

        </div>
        
      </div>

      <AboutBox />
    </section>
  )
}

export default About