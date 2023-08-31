import React from 'react';
import img  from "../../assets/26.jpg";
import img2 from "../../assets/27.jpg";
import img3 from "../../assets/28.jpg";
import img4 from "../../assets/29.jpg";
import img5 from "../../assets/30.jpg";
import img6 from "../../assets/31.jpg";

const Menue = () => {
  return (
    <div  class="my-5 py-7 py-md-9 border-bottom">
          <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 text-center">

        <h2 class="mb-2">
            Menu options
          </h2>

        
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
          </p>

        </div>
      </div>
      <div class="row">
        <div class="col">

          
          <div class="nav justify-content-center mb-6" id="menuTabs" role="tablist">
            <a class="nav-link active" id="mainsTab" data-bs-toggle="tab" href="#mains" role="tab" aria-controls="mains"
              aria-selected="true">
              Mains
            </a>
            <a class="nav-link" id="lunchTab" data-bs-toggle="tab" href="#lunch" role="tab" aria-controls="lunch">
              Lunch
            </a>
            <a class="nav-link" id="dinnerTab" data-bs-toggle="tab" href="#dinner" role="tab" aria-controls="dinner">
              Dinner
            </a>
            <a class="nav-link" id="drinksTab" data-bs-toggle="tab" href="#drinks" role="tab" aria-controls="drinks">
              Drinks
            </a>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-12">

    
          <div class="tab-content" id="menuContent">
            <div class="tab-pane fade show active" id="mains" role="tabpanel" aria-labelledby="mainsTab">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                        
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                        
                        <h5 class="mb-2">Lorem ipsum dolor sit amet</h5>

        
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                
                        <div class="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                    
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img2} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                        
                        <h5 class="mb-2">Fusce id ante ut arcu</h5>
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

        
                        <div class="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img3} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                    
                        <h5 class="mb-2">Fusce sed dolor eget tortor</h5>

                    
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

            
                        <div class="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img4} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                      
                        <h5 class="mb-2">Lorem ipsum dolor sit amet</h5>

    
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                        <div class="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

        
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img5} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                        
                                                <h5 class="mb-2">Fusce id ante ut arcu</h5>

                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                    
                        <div class="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                       
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img} alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                     
                        <h5 class="mb-2">Fusce sed dolor eget tortor</h5>

                        
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                     
                        <div class="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunchTab">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">


                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src="./2.jpg" alt="..." /> 
                        </div>

                      </div>
                      <div class="col-7">

                
                        <h5 class="mb-2">Fusce id ante ut arcu</h5>

                        
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                        <div class="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

    
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src="assets/img/26.jpg" alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                    
                        <h5 class="mb-2">Lorem ipsum dolor sit amet</h5>

                
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                    
                        <div class="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

        
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src="assets/img/29.jpg" alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

        
                        <h5 class="mb-2">Lorem ipsum dolor sit amet</h5>

    
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                        <div class="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                        
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src="assets/img/28.jpg" alt="..." />
                        </div>

                      </div>
                      <div class="col-7">

                
                        <h5 class="mb-2">Fusce sed dolor eget tortor</h5>

        
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                        
                        <div class="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                       
                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src="assets/img/31.jpg" alt="..." />
                        </div>

                      </div>
                      <div class="col-7">


                        <h5 class="mb-2">Fusce sed dolor eget tortor</h5>

                        
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                 
                        <div class="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="py-3 border-bottom">
                    <div class="row">
                      <div class="col-3 align-self-center">

                        <div class="ratio ratio-1x1">
                          <img class="object-fit-cover" src={img6} alt="..."/>
                        </div>

                      </div>
                      <div class="col-7">

                        <h5 class="mb-2">Fusce id ante ut arcu</h5>

                      
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div class="col-2">

                  
                        <div class="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    
    </div>
    </section>

    
    
    </div>

  )
}

export default Menue