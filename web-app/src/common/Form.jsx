import React from 'react' ;
import rightIcin from "../Assets/chevron.svg" ;
import "./Form.css" ;

const Form = () => {
  return (
    <form className="email-signup">
    <input type="email" placeholder="Email adress" />
    <br />
    <button type="submit" >Get Started <img  src={rightIcin} alt="" style={{width :"18px"}} /> </button>
  </form>
  )
}

export default Form
