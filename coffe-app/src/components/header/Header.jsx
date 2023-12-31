import React, { useState, useEffect } from 'react';
import img from '../../assets/bogota-restaurants-azahar-cafe1.jpg.webp'  ;
import './Header.css' ;


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='header'>
    <nav className={`navbar navbar-brand fw-bolder navbar-expand-lg navbar-togglable fixed-top ${scrolled ? 'scrolled' : ''}`}>
    <div className="container">

     
      <h1 className="navbar-brand d-lg-none fw-bolder text-warning-hover" href="/">Tech Cofee-Tea</h1>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    
      <div className="collapse navbar-collapse" id="navbarCollapse">

      
        <ul className="navbar-nav fw-bold">
          <li className="nav-item text-white">
            <a className="nav-link fw-bolder " href="/" >About Us</a>
          </li>

          <li className="nav-item dropdown fw-bolder">
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

   
        <ul className="navbar-nav fw-bold" >
          <li className="nav-item fw-bold ">
            <a className="nav-link fw-bold " href="/">News & Events</a>
          </li>
          <li className="nav-item fw-bold">
            <a className="nav-link fw-bold " href="/">Gallery</a>
          </li>
          <li className="nav-item fw-bold" >
            <a className="nav-link fw-bold" href="/">Contact</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

    <header
      data-jarallax
      data-speed=".8"
      style={{
        backgroundImage: `url(${img})`,
        width: '100%',
        backgroundSize: 'cover',
      }}
    >
      <div className="d-flex flex-column min-vh-100 bg-black-s50 pt-10 pt-md-8 pb-7 pb-md-0">
        <div className="container my-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h6 className="text-xs text-white">
                <span className="text-warning">Café</span> / Restaurant
              </h6>
              <h1 className="display-1 text-white mb-4">Tech Cofee-Tea</h1>
              <p className="text-center text-white mb-7">
                A unique café located in the heart of Faisalabad. Always fresh coffee and biscuits. Open for indoor
                dining and to-go orders.
              </p>
              <a class="btn btn-outline-warning text-white bg-transparent-hover rounded-0 mx-5 my-2" href="#reservation">
                Make reservation
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md">
            <ul className="list-inline text-center text-md-start mb-3 my-md-5">
              <li className="list-inline-item">
                <a className="text-white-75 text-primary-hover" href="#!">
                <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item ms-5">
                <a className="text-white-75 text-primary-hover" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item ms-5">
                <a className="text-white-75 text-primary-hover" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header