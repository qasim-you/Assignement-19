import React from 'react'

const Cards = ({image,title}) => {
  return (
    <div className="box">
    <img src={image} alt="" />
    <h2 className="h2-secondary center">{title}</h2>
    <p className="center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      nostrum provident ut optio accusamus
    </p>
  </div>
  )
}

export default Cards