import React from 'react'
import "../css/LoginUiCss.css"

const LoginUi = () => {
  return (
    <div className='main-container'>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='enter email' id='email'/>

        <label htmlFor='password'>PassWord</label>
        <input type="password" placeholder='enter password' id='password' />

        <button onClick={()=>console.log("clicked")}>Login</button>
    
    </div>
  )
}

export default LoginUi