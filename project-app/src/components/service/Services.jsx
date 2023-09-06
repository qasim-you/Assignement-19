import React from "react";
import "./Services.css"

const Services = () => {
  return <div className="service">
    <section className="services-container">
  <h1 className="h1-primary center" >
    Our Services
  </h1>
  <div id="services">
    <div className="box">
        <img src="./1.jpg" alt="" />
        <h2 className="h2-secondary center">Food Ordering</h2>
        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum provident ut optio accusamus </p>
    </div>
    <div className="box">
        <img src="./2.jpg" alt="" />
        <h2 className="h2-secondary center">Bulk Ordering</h2>
        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum provident ut optio accusamus </p>
    </div>
    <div className="box">
        <img src="./3.jpg" alt="" />
        <h2 className="h2-secondary center">Home Ordering</h2>
        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum provident ut optio accusamus </p>
    </div>
  </div>


</section>

  </div>;
};

export default Services;
