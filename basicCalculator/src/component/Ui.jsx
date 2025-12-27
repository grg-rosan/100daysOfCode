import React, { useState } from "react";
function CalculatorInterface() {

    const [input, setInput] = useState(0)
    const [operation, setOperation] = useState();


  return (
    <>
      <div className="input-block">
        <input type="numbers" />
      </div>
      <div className="calc-keys">
        <div className="num-btns">
          <span className="num" onClick={()=>setInput()}>0</span>
          <span className="num" onClick={()=>setInput()}>1</span>
          <span className="num" onClick={()=>setInput()}>2</span>
          <span className="num" onClick={()=>setInput()}>3</span>
          <span className="num" onClick={()=>setInput()}>4</span>
          <span className="num" onClick={()=>setInput()}>5</span>
          <span className="num" onClick={()=>setInput()}>6</span>
          <span className="num" onClick={()=>setInput()}>7</span>
          <span className="num" onClick={()=>setInput()}>8</span>
          <span className="num" onClick={()=>setInput()}>9</span>
        </div>
        <div className="op-btns">
          <span className="keys">Ac</span>
          <span className="keys">+</span>
          <span className="keys">-</span>
          <span className="keys">*</span>
          <span className="keys">/</span>
          <span className="keys">=</span>
        </div>
      </div>
    </>
  );
}
export default CalculatorInterface;
