import React from 'react' ;
import "./Navbar.css" ;
import img from '../../Assets/54848673.jpg' ;
const Navbar = () => {
  return (
    <div className='container-fluid '>
        <nav className="navbar navbar-expand-lg  rounded" aria-label="Thirteenth navbar example">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a className="navbar-brand nav-link col-lg-3 " href="/#"><img className='img-fluid' src={img} style={{"width" :"60px","borderRadius":"50%"}} alt="" /></a>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link "  href="/#">Tournaments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Our Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/#' >Shop Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/#">Action</a></li>
                <li><a className="dropdown-item" href="/#">Another action</a></li>
                <li><a className="dropdown-item" href="/#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button className="btn btn-outline-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>


    </div>
  )
}

export default Navbar