
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contacts' element={<Contacts/>} />

      </Route>
    )
  )

  return (
   <RouterProvider router = {router} />
  )
}

export default App
