import React from "react";
import { useState } from "react";

function Ui() {
    const [count ,setCount] = useState(0);
    
  return (
    <>
      <div>
        <h2>Counter</h2>
        <span>count:{count}</span>

        <div className="btn-class">
          <button onClick={()=> setCount(count +  1)}>click me</button>
          <button onClick={()=> setCount(0)}>reset counter</button>
        </div>
      </div>
    </>
  );
}

export default Ui;
