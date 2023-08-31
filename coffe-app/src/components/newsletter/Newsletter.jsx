import React from 'react'

const Newsletter = () => {
    return (
        <div  className="py-7 py-md-9 bg-light">

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">

                         
                            <h2 className="mb-2">
                                Newsletter
                            </h2>

                          
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium
                                sequi in cum, beatae maiores quae qui.
                            </p>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">

                          
                            <div id="mc_embed_signup">
                                <form >
                                    <div className="row justify-content-center gx-3" id="mc_embed_signup_scroll">
                                        <div className="col">
                                            <label className="visually-hidden" for="mce-EMAIL">Email Address </label>
                                            <input className="form-control" type="email" value="" name="EMAIL" id="mce-EMAIL" />
                                        </div>
                                        <div className="visually-hidden" id="mce-responses">
                                            <div className="response" id="mce-error-response" style={{display:"none",}}></div>
                                            <div className="response" id="mce-success-response" style={{display:"none",}}></div>
                                        </div>

                                        <div style={{position: "absolute", left: "-5000px",}} aria-hidden="true">
                                            <input type="text"  tabindex="-1"
                                                 />
                                        </div>
                                        <div className="col-auto " style={{marginBottom: "30px",}}>
                                            <input className="btn btn-outline-primary" type="submit" value="Subscribe"
                                                name="subscribe" id="mc-embedded-subscribe" />
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Newsletter