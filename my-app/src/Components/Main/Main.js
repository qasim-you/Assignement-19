import React from 'react'


const Main = () => {
  return (
    <>
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-3">
            <div className="col-lg-6">
              <h1 className='py-5'>Subscribe to our Newsletter</h1>
              <form action="post">

                <div className="input-group mb-3">
                  <input type="email" class="form-control" placeholder="Enter your mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-danger" type="button" id="button-addon2">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
