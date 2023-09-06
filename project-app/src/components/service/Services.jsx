import React from "react";
import "./Services.css"
import img2 from '../../Assets/Images/1.jpg';
import img3  from '../../Assets/Images/2.jpg';
import img4  from '../../Assets/Images/3.jpg';
import Cards from "../../common/Cards";

const Services = () => {
  return <div className="service">
    <section className="services-container">
  <h1 className="h1-primary center" >
    Our Services
  </h1>
  <div id="services">
  <Cards
  image={img2}
  title="Food Ordering"
  
  
  />
  <Cards
  image={img3}
  title="Builk Ordering"
  
  
  />
  <Cards
  image={img4}
  title="Home Ordering"
  
  
  />
  </div>


</section>

  </div>;
};

export default Services;
