import React from 'react'

const Scrolldown = () => {
  return (
    <div className='scroll_down'>
        <a href="#about" className='mouse__wrapper'>
            <span className='home_scroll'>Scroll Down</span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
        </a>
    </div>
  )
}

export default Scrolldown