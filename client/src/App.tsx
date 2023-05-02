import { useState , useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { usePageTitle } from './usePageTitle';
import Footer from './components/Footer';

function App() {

  const currentPage = usePageTitle();

  return (
    <div className="App">   
    
    <div>
      <NavBar page={currentPage}/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
        </Routes>
        <Footer/>

        </div>
      
    </div>
  )
  
}

export default App
