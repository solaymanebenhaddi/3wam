import React,{ useState } from "react";


function Header() {

const [Navbar, setNavbar] = useState(false);

const CHangeBgNav=()=>{
  if(window.scrollY >= 80){
    setNavbar(true);
  }
  else{
    setNavbar(false)
  }
}
window.addEventListener('scroll',CHangeBgNav);


  return (
    <>
    <header id="header" className={Navbar ? 'header-scrolled fixed-top':'start fixed-top'}>
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="/#">3WA</a></h1>
      
      <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#about">L’académie</a></li>
          <li className="dropdown"><a href="#formations"><span>Nos Formations</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="/#"><span>WordPress</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/#">Formation developpeur WordPress</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="/#"><span>Front-end</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/#">Formation Developpeur Front-end ReactJs</a></li>
                  <li><a href="/#">Formation Developpeur Front-end ReactJs-En ligne</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="/#"><span>Full-stack web</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/">Formation Developpeur web Full-stack(php-Laravel)</a></li>
                </ul>
              </li>
              
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="/">News & Blog</a></li>
          <li><a className="nav-link scrollto" href="#entreprise">Espace Entreprise</a></li>
          <li><a className="nav-link scrollto " href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto bg-warning" href="#apply">S'inscrire Maintenant</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Header