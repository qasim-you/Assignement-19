import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer class="py-7 py-md-9 bg-black" style={{paddingTop: "100px",color: "#fff",}}>
      <div class="container px-4">      
                        
                <div class="row gx-7">
          <div class="col-sm-4">
    
            
            <h5 class="text-xs text-primary">
              About Us
            </h5>
    
         
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi saepe.
            </p>
    
          </div>
          <div class="col-sm-4">
    
        
            <h5 class="text-xs text-primary">
              Contact info
            </h5>
    
           
            <ul class="list-unstyled mb-6">
              <li class="d-flex mb-2">
                <div class="fas fa-map-marker-alt me-3 mt-2 fs-sm"></div>
                1234 Pakistan, Faisalabad, CA 10027-0000
              </li>
              <li class="d-flex mb-2">
                <div class="fas fa-phone me-3 mt-2 fs-sm"></div>
                +1 987 654 3210
              </li>
              <li class="d-flex">
                <div class="far fa-envelope me-3 mt-2 fs-sm"></div> <a href="#/">1234@....com</a>
              </li>
            </ul>
    
          </div>
          <div class="col-sm-4">
    
           
            <h5 class="text-xs text-primary">
              Opening hours
            </h5>
    
            
            <div class="mb-3">
              <div class="text-xs">Monday - Thursday</div>
              <div class="font-serif">10:00 AM - 11:00 PM</div>
            </div>
    
        
            <div class="mb-6">
              <div class="text-xs">Friday - Sunday</div>
              <div class="font-serif">12:00 AM - 03:00 AM</div>
            </div>
    
          </div>
        </div>
        <div class="row">
          <div class="col-12">
    
           
            <div class="d-flex align-items-center">
              <hr class="hr-sm me-3" style={{height: "1px",}} /> &copy; 2021 Touché. All rights reserved.
            </div>
    
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer