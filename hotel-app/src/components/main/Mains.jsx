import React from 'react' ;
import "./Main.css" ;
import about from "../../Assets/about.jpg" ;


const Mains = () => {
  return (
    <div>
      
<div class="container-fluid  py-5 my-2">
  <h1 class="text-center mx-auto ">
    About Us
  </h1>

  <div class="album py-5 ">
  <div class="container py-5 my-2">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    
      <div class="card w-70 cards ">
        <img src={about} class="card-img img-fluid " alt="..." style={{"height" : "50vh"}} />
       
      </div>
<div class="row-cols-md-3 mx-auto">
 <h2 class="text-body-secondary">
  Gamers
 </h2>
<div class="custo-box">
  Pro-gamer
</div> 
<p class="text-body-secondary">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur nisi consectetur! Voluptas quis 
</p>
</div>
</div>
</div>
</div>
  </div>

  
</div>

  )
}

export default Mains
