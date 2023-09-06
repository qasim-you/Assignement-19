import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
        <section id="contact">
    <h1 className="h-primary center">
        Contact Us
    </h1>
    <div id="contact-box">
        <form action="">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" 
                placeholder="Enter Your Name" />
            </div>
            <div class="form-group">
                <label for="name">Email:</label>
                <input type="email" name="name" id="name" 
                placeholder="Enter Your Email" /> 
            </div>
            <div class="form-group">
                <label for="name">Phone:</label>
                <input type="Phone" name="name" id="name" 
                placeholder="Enter Your Number" />
               
            </div>
            <textarea name="Message" id="message" cols="30" rows="10"></textarea>
        </form>
    </div>
</section>
    </div>
  )
}

export default Contact