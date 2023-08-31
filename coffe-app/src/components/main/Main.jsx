import React from 'react'

const Main = () => {
  return (
    <div className="py-7 py-md-9 bg-light" id="reservation">
                            <section >
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 text-center">

                        
                              <h2 className="mb-2">
                                Make online reservation
                              </h2>

                        
                              <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium
                                sequi in cjum, beatae maiores quae qui.
                              </p>

                            </div>
                          </div>
                          <div className="row justify-content-lg-center">
                            <div className="col-lg-8">

                          
                              <form id="reservationForm">
                                <div className="row gx-3">
                                  <div className="col-md-6">

                         
                                    <input type="hidden" name="contact_number" />

                                   
                                    <div className="mb-3">
                                      <label className="visually-hidden" for="user_name">Full name</label>
                                      <input className="form-control" id="user_name" name="user_name" type="text"
                                        placeholder="Full name" required />
                                    </div>

                                    
                                    <div className="mb-3">
                                      <label className="visually-hidden" for="user_phone">Phone number</label>
                                      <input className="form-control" id="user_phone" name="user_phone" type="tel"
                                        placeholder="Phone number" required />
                                    </div>

                             
                                    <div className="mb-3">
                                      <label className="visually-hidden" for="user_email">Email address</label>
                                      <input className="form-control" id="user_email" name="user_email" type="email"
                                        placeholder="Email address" required />
                                    </div>

                                  </div>
                                  <div className="col-md-6">

                                
                                    <div className="mb-3">
                                      <label className="visually-hidden" for="guests">Guests</label>
                                      <select className="form-select" id="guests" name="guests" required>
                                        <option value="1">1 person</option>
                                        <option value="2" selected="">2 persons</option>
                                        <option value="3">3 persons</option>
                                        <option value="4">4 persons</option>
                                        <option value="5">5 persons</option>
                                      </select>
                                    </div>

                                    <div className="mb-3">
                                      <label className="visually-hidden" for="date">Date</label>
                                      <input className="form-control" id="date" name="date" type="date" value="2021-02-12"
                                        required />
                                    </div>

                               
                                    <div className="mb-3">
                                      <label className="visually-hidden" for="time">Time</label>
                                      <input className="form-control" id="time" name="time" type="time" value="18:00"
                                        required />
                                    </div>

                                  </div>
                                  <div className="col text-center">

                                  
                                    <button className="btn btn-outline-primary" type="submit">
                                      Reserve a table
                                    </button>

                                  </div>
                                </div>
                              </form>

                            </div>
                          </div>
                        </div>
                      </section>
    </div>
  )
}

export default Main
