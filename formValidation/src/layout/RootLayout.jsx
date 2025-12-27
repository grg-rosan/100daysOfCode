import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        {/* <Home /> */}
        <Outlet/>
    </div>
  )
}

export default RootLayout