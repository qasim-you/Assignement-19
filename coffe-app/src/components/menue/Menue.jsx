import React from 'react';
import img  from "../../assets/26.jpg";
import img2 from "../../assets/27.jpg";
import img3 from "../../assets/28.jpg";
import img4 from "../../assets/29.jpg";
import img5 from "../../assets/30.jpg";
import img6 from "../../assets/31.jpg";

const Menue = () => {
  return (
    <div  className="my-5 py-7 py-md-9 border-bottom">
          <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">

        <h2 className="mb-2">
            Menu options
          </h2>

        
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
          </p>

        </div>
      </div>
      <div className="row">
        <div className="col">

          
          <div className="nav justify-content-center mb-6" id="menuTabs" role="tablist">
            <a className="nav-link active" id="mainsTab" data-bs-toggle="tab" href="#mains" role="tab" aria-controls="mains"
              aria-selected="true">
              Mains
            </a>
            <a className="nav-link" id="lunchTab" data-bs-toggle="tab" href="#lunch" role="tab" aria-controls="lunch">
              Lunch
            </a>
            <a className="nav-link" id="dinnerTab" data-bs-toggle="tab" href="#dinner" role="tab" aria-controls="dinner">
              Dinner
            </a>
            <a className="nav-link" id="drinksTab" data-bs-toggle="tab" href="#drinks" role="tab" aria-controls="drinks">
              Drinks
            </a>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col-12">

    
          <div className="tab-content" id="menuContent">
            <div className="tab-pane fade show active" id="mains" role="tabpanel" aria-labelledby="mainsTab">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                        
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                        
                        <h5 className="mb-2 fw-bold">Chicken Zinger Burger </h5>

        
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                
                        <div className="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                    
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img2} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                        
                        <h5 className="mb-2 fw-bold">Fresh And Tasty Donuts</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

        
                        <div className="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img3} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                    
                        <h5 className="mb-2 fw-bold">Fresh Desi Nagats</h5>

                    
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

            
                        <div className="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img4} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                      
                        <h5 className="mb-2 fw-bold">Fresh Kabab And Eggs</h5>

    
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                        <div className="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

        
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img5} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                        
                                                <h5 className="mb-2 fw-bold">Fresh nagtas and Vegetables</h5>

                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                    
                        <div className="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                       
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img6} alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                     
                        <h5 className="mb-2 fw-bold">Fresh Tikka and Choclate</h5>

                        
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                     
                        <div className="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunchTab">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">


                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src="./2.jpg" alt="..." /> 
                        </div>

                      </div>
                      <div className="col-7">

                
                        <h5 className="mb-2">Fusce id ante ut arcu</h5>

                        
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                        <div className="fs-4 font-serif text-center text-black">
                          $23
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

    
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src="assets/img/26.jpg" alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                    
                        <h5 className="mb-2">Lorem ipsum dolor sit amet</h5>

                
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                    
                        <div className="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

        
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src="assets/img/29.jpg" alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

        
                        <h5 className="mb-2">Lorem ipsum dolor sit amet</h5>

    
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                        <div className="fs-4 font-serif text-center text-black">
                          $15
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                        
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src="assets/img/28.jpg" alt="..." />
                        </div>

                      </div>
                      <div className="col-7">

                
                        <h5 className="mb-2">Fusce sed dolor eget tortor</h5>

        
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                        
                        <div className="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                       
                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src="assets/img/31.jpg" alt="..." />
                        </div>

                      </div>
                      <div className="col-7">


                        <h5 className="mb-2">Fusce sed dolor eget tortor</h5>

                        
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                 
                        <div className="fs-4 font-serif text-center text-black">
                          $16
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="py-3 border-bottom">
                    <div className="row">
                      <div className="col-3 align-self-center">

                        <div className="ratio ratio-1x1">
                          <img className="object-fit-cover" src={img6} alt="..."/>
                        </div>

                      </div>
                      <div className="col-7">

                        <h5 className="mb-2">Fusce id ante ut arcu</h5>

                      
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente
                          laudantium.
                        </p>

                      </div>
                      <div className="col-2">

                  
                        <div className="fs-4 font-serif text-center text-black">
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