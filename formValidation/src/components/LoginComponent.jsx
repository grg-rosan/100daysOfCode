import React, { useState } from "react";
import { Routes, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const navigate = useNavigate();

  const validateUser = () => {
    let email = "example@gmail.com";
    let pass = "Ram123!";


    if (email !== emailInput || passInput !== pass){
        alert("enter credentials");
        return;
    }
    else{
        alert("success");
        navigate("login");
    } 
};

  return (
    <div>
      <span>Please enter your credentials</span>

      <div>
        <input
          type="email"
          required
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          required
          onChange={(e) => setPassInput(e.target.value)}
        />

        <button onClick={() => validateUser()}>Login</button>
      </div>
    </div>
  );
};

export default LoginComponent;
