import React from "react";
import LoginComponent from "./components/LoginComponent";
import { Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout"
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register />}/>
      </Route>
    )
  )
  return <>
  <RouterProvider router={router}/>
  </>;
};

export default App;
