import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>Contact US </h1>
            <form className="container forms my-5 ">
              <div class="mb-3">
                <label for="text" class="form-label ">
                  Name :
                </label>
                <input
                  type="text"
                  class="form-control bg-transparent text-white"
                  id="exampleInputText"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="text" class="form-label">
                  Last Name :
                </label>
                <input
                  type="text"
                  class="form-control bg-transparent text-white "
                  id="exampleInputText"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label ">
                  Email address :
                </label>
                <br />
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  className="bg-transparent text-white"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label "
                >
                  How did you hear about us ?
                </label>
                <select class="form-select bg-transparent text-white" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control sbg-transparent"
                  id="exampleFormControlTextarea1"
                  rows="3"
                >Write your message .</textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
