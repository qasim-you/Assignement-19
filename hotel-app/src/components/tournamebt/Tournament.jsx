import React from 'react';
import card from "../../Assets/card1.jpg";
import card2 from "../../Assets/card2.jpg";
import card3 from "../../Assets/card3.jpg";
import card4 from "../../Assets/card4.jpg";
import card5 from "../../Assets/card5.jpg";
import card6 from "../../Assets/card6.jpg";
import "./Tournament.css" ;
import Cards from '../../common/Cards';

const Tournament = () => {
  return (
   

<div class="album py-5 bg-body-dark">
  <div class="container  my-2">
    <h1 class="text-center m-6 p-5" >Tournaments</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     <Cards
     image={card}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
      <Cards
     image={card2}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
     <Cards
     image={card3}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
     <Cards
     image={card4}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
     <Cards
     image={card5}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
     <Cards
     image={card6}
     title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
     
     />
     
      

      
   

      </div>
      </div>
   
</div>

 
   
  )
}

export default Tournament
