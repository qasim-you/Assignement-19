import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [counter, setCounter] = useState(0);
const evenOdd =() => {
    return (counter%2===0) ;
    
}
  return (
    <div className="form">
      <h1>Counter App</h1>
      <div>
        <h1>{counter} : <span>{evenOdd() ? "Even ":" Odd "}</span></h1>
        <button onClick={()=>setCounter(counter +1) }>Increment </button>
        <button onClick={()=>setCounter(counter - counter)}> Reset</button>
        <button onClick={()=>setCounter(counter -1)}> Decrement</button>

      </div>
    </div>
  );
};

export default Form;
