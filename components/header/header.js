import React, { useEffect, useRef } from 'react'

function Header() {

  function openNav(){
    if(!document.body.classList.contains("open")){
      document.body.classList.add("open");
      document.body.classList.add("stopScrolling");

    }else{
      document.body.classList.remove("open");
      document.body.classList.remove("stopScrolling");



    }
  }

  function closeNav(){
   
      document.body.classList.remove("open");
      document.body.classList.remove("stopScrolling");
   
  }

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
              <a href="#home" className="nav-link" onClick={()=>{closeNav()}}>Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={()=>{closeNav()}}>About</a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={()=>{closeNav()}}>Services</a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link" onClick={()=>{closeNav()}}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={()=>{closeNav()}}>Contact</a>
            </li>
          </ul>
          <i className="uil uil-moon toggle-btn" onClick={()=> changeTheme(!document.body.classList.contains("dark"))}></i>
        </div>  
        <div className="hamburger" onClick={()=> {openNav()}}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>        
    </header>
  )
}

export default Header
