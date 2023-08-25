import React from 'react' ;
import logo from "../../Assets/logo.png" ;
import icon from "../../Assets/down-icon.png" ;
import "./Header.css" ;
import Form from '../../common/Form';

const Header = () => {
  return (
    <div className="header">
    <nav>
      <img className="logo" src={logo} alt="" />
      <div>
        <button className="lng-btn">
          English <img src={icon} alt="" />
        </button>
        <button>Sign in</button>
      </div>
    </nav>
    <div className="header-content">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Form />
    </div>
  </div>
  )
}

export default Header
