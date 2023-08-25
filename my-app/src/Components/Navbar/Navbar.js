import React from 'react' ;
import logo from "../../Assets/4295.png" ;


const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top ">
  <div className="container">
    <a className="navbar-brand font-bolder" href="//"><img src={logo} alt='' style={{width:"40px"}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="./navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active fw-bolder" aria-current="page" href="/">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bolder" aria-current="page" href="/">Collections </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bolder" aria-current="page" href="/">Contact</a>
        </li>
      
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Login </button>
      </form>
    </div>
  </div>
</nav>

    </>
  ) 
}

export default Navbar
