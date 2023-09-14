import React from 'react'
import Data from './Data'
import Card from './Card'
import './Experience.css'

const Experience = () => {
  return (
    <section className="resume container section" id="experience">
      <h2 className="section_title">✨Experience✨</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((item, id) => {
            if(item.category === "Education"){
              return (
                <Card key={id}
                      icon={item.icon}
                      year={item.year}
                      title={item.title}
                      location={item.location}
                      desc={item.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((item, id) => {
            if(item.category === "Experience"){
              return (
                <Card key={id}
                      icon={item.icon}
                      year={item.year}
                      title={item.title}
                      location={item.location}
                      desc={item.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience