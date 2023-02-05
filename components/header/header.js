import React, { useEffect, useRef } from 'react'

function Header() {

  const header = useRef(); 
  function stickyNavBar(){
    header?.current?.classList?.toggle("scrolled", window.scrollY > 0);
  }

  useEffect(()=>{

    
    stickyNavBar();
    globalThis.addEventListener("scroll", stickyNavBar );


  })

  return (
    <header ref={header} >
      <nav className="container">
        <a href="#" className="logo">Mahmoud  <span>Zakaria</span></a>
        <div className="links">
          <ul>
            <li>
              <a href="#" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#" className="nav-link">About</a>
            </li>
            <li>
              <a href="#" className="nav-link">Services</a>
            </li>
            <li>
              <a href="#" className="nav-link">Portfolio</a>
            </li>
            <li>
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
          <i className="uil uil-moon toggle-btn"></i>
        </div>  
      </nav>        
    </header>
  )
}

export default Header
