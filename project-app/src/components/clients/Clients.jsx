import React from "react";
import "./Clients.css";
import img from "../../Assets/Images/logo1.png";
import img2 from "../../Assets/Images/logo2.png";
import img3 from "../../Assets/Images/logo3.png";


const Clients = () => {
  return (
    <div>
      <section id="client-section">
        <h1 className="h-primary center">Our Clients</h1>
        <div id="clients">
          <div className="client-item">
            <img src={img} alt="logo" />
          </div>
          <div className="client-item">
            <img src={img2} alt="logo" />
          </div>
          <div className="client-item">
            <img src={img3} alt="logo" />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Clients;
