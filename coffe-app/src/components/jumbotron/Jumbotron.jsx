import React from 'react' ;
import JumbotronImgs from "../../assets/jumbtotron.jpg" ;
import "./Jumbotron.css"

const Jumbotron = () => {
  return (
    <div>
  <section data-jarallax data-speed=".8" className='section1'
    style={{backgroundImage:`url(${JumbotronImgs})`, backgroundSize: "cover", }} >
    <div className="min-vh-100 py-7 py-md-9 bg-gradient-bottom-end-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">

          
            <hr className="hr-sm bg-primary"/>

         
            <p className="fs-lg lh-lg text-black mb-0">
              Enjoy our specialty coffees and award winning doughnuts in a friendly atmosphere.
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Jumbotron