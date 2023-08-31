import React from 'react' ;
import imgBroo from "../../assets/bro.jpg" ;

const Client = () => {
  return (
   <div  className="my-4 py-7 py-md-9 border-bottom">

                      <section >
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 text-center">

                         
                              <h2 className="mb-2">
                                What clients say about us
                              </h2>

                              <p className="mb-6" style={{margin: "50px",}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              </p>

                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">

                        
                              <div data-flickity='{"imagesLoaded": true, "wrapAround": true}'>
                                <div className="w-100">
                                  <div className="row align-items-center justify-content-center">
                                    <div className="col-8 col-md-3 order-md-1">

                                   
                                      <img className="img-fluid rounded-circle mb-3 mb-md-0" src={imgBroo}
                                        alt="/"  style={{width:"50%" ,}} />

                                    </div>
                                    <div className="col-md-7 order-md-0">

                                      
                                      <figure className="mx-auto mb-0" style={{maxWidth: "500px",}}>
                                        <blockquote className="blockquote mb-0">
                                          <p className="font-serif text-black mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis
                                            vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis
                                            iste, vel fuga a, libero architecto ratione deleniti sequi.
                                          </p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer text-xs mb-0">
                                          Muhammad Qasim
                                        </figcaption>
                                      </figure>

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

export default Client