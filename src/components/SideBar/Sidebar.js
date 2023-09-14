import React from 'react'
import './Sidebar.css'
// import Logo from '../../images/home.png'

const Sidebar = () => {
  const[toggle, showMenu] = React.useState(false);



  return (
    <>
      <aside className='aside'>
        {/*Profile logo*/}
        <a href='#home' className='nav_logo'>
          <img src='' alt='' />
        </a>

        <nav className='nav'>
          <div className='nav_menu'>
            <ul className='nav_list'>

              <li className='nav_item'>
                <a href='#home' className='nav_link active_link'>
                  <i className='icon-home'></i>
                </a>
              </li>

              <li className='nav_item'>
                <a href='#about' className='nav_link'>
                  <i className='icon-user-following'></i>
                </a>
              </li>

              <li className='nav_item'>
                <a href='#experience' className='nav_link'>
                  <i className='icon-graduation'></i>
                </a>
              </li>

              <li className='nav_item'>
                <a href='#contact' className='nav_link'>
                  <i className='icon-layers'></i>
                </a>
              </li>

            </ul> 
          </div> 
        </nav>
        {/* <div className='nav_footer'>
            <span className='nav_footer_text'>© 2021</span>
        </div> */}
      </aside>
      {/* <div 
        className={toggle ? 'nav_toggle nav_toggle_open' : 'nav_toggle'}
        onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div> */}
    </>
  )
}

export default Sidebar