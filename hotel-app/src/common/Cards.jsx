import React from 'react'

const Cards = ({image,title}) => {
  return (
    <div >
      <div class="col">
        <div class="card shadow-md cardi bg-transparent" >
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={image} alt=""/>
          <div class="card-body">
            <p class="card-text">{title}</p>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
