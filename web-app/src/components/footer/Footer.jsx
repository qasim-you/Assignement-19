import React from 'react' ;
import eng from "../../Assets/down-icon.png" ;
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <h2>Questions? Contact Us</h2>
        <div className="row">
            <div className="col">
            <a href="/">FAQ</a>
            <a href="/">Invester Relations</a>
            <a href="/">Privacy</a>
            <a href="/">Speed Test</a>
        </div>
        <div className="col">
            <a href="/">Help Center</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
            <a href="/">Legal Notices</a>
        </div>
        <div className="col">
            <a href="/">Accounts</a>
            <a href="/">Ways to Watch</a>
            <a href="/">Cooperate Information</a>
            <a href="/">Only on Netflix</a>
      
        </div>
        <div className="col">
            <a href="/">Media Center</a>
            <a href="/">Terms of Use</a>
            <a href="/">JobContact Us</a>
    
        </div>
        </div>
        <button className="lng-btn">English <img src={eng} alt="" /> </button>
        <p className="copy-right">
            Netflix Pakistan
        </p>
    </div>
  )
}

export default Footer