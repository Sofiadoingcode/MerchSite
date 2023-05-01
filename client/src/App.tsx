import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {Route, Router, Routes, BrowserRouter} from "react-router-dom"
import HomePage from './pages/HomePage'

function App() {

  return (
  
    <div className="App">

      <BrowserRouter>
      <NavBar/>
      <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
