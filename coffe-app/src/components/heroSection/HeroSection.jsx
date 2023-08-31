import React from 'react' ;
import img from "../../assets/2.jpg" ;
import img1 from "../../assets/7.jpg";

const HeroSection = () => {
  return (
    <div className='HeroSection'>
    <section className="pt-7 pt-md-9 my-7">
    <div className="container">
      <div className="row">
        <div className="col-md-2">

        
          <hr className="hr-sm bg-warning" />

  
          <p className="fs-lg lh-lg text-black mb-5 mb-md-0">
            Take a coffee break or enjoy a meal.
          </p>

        </div>
        <div className="col-md-4">

          <div className="media-decoration media-decoration-1 mb-5 mb-md-7">

          
            <div className="media-decoration-border" data-jarallax-element="-40"></div>

        
            <img className="media-decoration-img img-fluid py-7 " src={img1} alt="..." style={{marginTop: "80px"}} />

          </div>

        </div>
        <div className="col-md-5 align-self-center mx-auto">

          
          <h2 className="mb-2">
            <em>Always</em> amazing experience
          </h2>

        
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum
            libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit,
            voluptatibus!
          </p>

        </div>
      </div>
    </div>
  </section>


  <section className="py-7 py-md-9">
    <div className="container">
      <div className="row">
        <div className="col-md-2 order-md-2 align-self-end">

       
          <hr className="hr-sm bg-primary" />

         
          <p className="fs-lg lh-lg text-black mb-5 mb-md-0">
            Great variety of foods you will enjoy.
          </p>

        </div>
        <div className="col-md-4 order-md-3">

          
          <div className="media-decoration media-decoration-1 mb-5 mb-md-0">

           
            <div className="media-decoration-solid" data-jarallax-element="-40"></div>

          
            <div className="media-decoration-border" data-jarallax-element="-40"></div>

           
            <img className="media-decoration-img img-fluid" src={img} alt="..." style={{marginBottom: "80px",}} />

          </div>

        </div>
        <div className="col-md-5 order-md-1 align-self-center mx-auto">

      
          <h2 className="mb-2">
            <em>Beautiful</em> outdoor seating
          </h2>

       
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae similique asperiores consequatur! Nihil
            temporibus qui enim. Accusamus voluptates a, et quidem! Quo, et?
          </p>

        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default HeroSection