import React from 'react'

const Navbar = () => {
  return (
   
  <nav className="navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top">
    <div className="container">

     
      <a className="navbar-brand d-lg-none" href="/">Tech Cofee-Tea</a>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    
      <div className="collapse navbar-collapse" id="navbarCollapse">

      
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/" >About Us</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menue
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">Reservation</a>
          </li>
        </ul>

      
        <a className="navbar-brand d-none d-lg-flex mx-lg-auto" href="/">
          Tech Cofee'
        </a>

   
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/">News & Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">Contact</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  )
}

export default Navbar