import React from 'react' ;

const Header = () => {
    
  return (
    <header
      data-jarallax
      data-speed=".8"
      style={{
        backgroundImage: 'url()',
        width: '100%',
        backgroundSize: 'cover',
      }}
    >
      <div className="d-flex flex-column min-vh-100 bg-black-50 pt-10 pt-md-8 pb-7 pb-md-0">
        <div className="container my-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h6 className="text-xs text-white-75">
                <span className="text-warning">Café</span> / Restaurant
              </h6>
              <h1 className="display-1 text-white mb-4">Tech Cofee-Tea</h1>
              <p className="text-center text-white-75 mb-7">
                A unique café located in the heart of Los Angeles. Always fresh coffee and biscuits. Open for indoor
                dining and to-go orders.
              </p>
              <a
                className="btn btn-outline-warning text-white text-warning-hover mb-7 mb-md-0"
                href="#reservation"
              >
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
              
                  </a>
                </li>
                <li className="list-inline-item ms-5">
                  <a className="text-white-75 text-primary-hover" href="#!">
                   
                  </a>
                </li>
                <li className="list-inline-item ms-5">
                  <a className="text-white-75 text-primary-hover" href="#!">
                   
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header