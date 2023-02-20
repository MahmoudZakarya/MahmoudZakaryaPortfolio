import React, { useEffect, useRef } from 'react'

function Header() {


  function changeTheme(isDark){
      const toggle_btn = document.querySelector(".toggle-btn")
      if(isDark){
        document.body.classList.add("dark"); 
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
      } else{
        document.body.classList.remove("dark"); 
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
      }
    }
  const header = useRef(); 
  function stickyNavBar(){
    header?.current?.classList?.toggle("scrolled", window.scrollY > 0);
  }

  useEffect(()=>{
    let fristTheme = localStorage.getItem("dark");

    changeTheme(+fristTheme);
    
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
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <i className="uil uil-moon toggle-btn" onClick={()=> changeTheme(!document.body.classList.contains("dark"))}></i>
        </div>  
      </nav>        
    </header>
  )
}

export default Header
