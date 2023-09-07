import React from 'react'
import "./Header.css" ;
const Header = () => {
  return (
    <div className='header container-fluid'>
<section className="py-5 text-center  " >


<div className="row py-lg-5">
  <div className="col-lg-6 col-md-8 mx-auto">
    <h2 className="fw-light">Album example</h2>
    <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
    <p>
      <a href="#/" className="btn btn-outline-info my-2  text-white">Main call to action</a>
      
    </p>
  </div>
</div>
</section>
    </div>
  )
}

export default Header