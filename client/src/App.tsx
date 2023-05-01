import { useState } from 'react'
import './App.css'
import ProductPage from "./pages/ProductPage";

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
      <ProductPage/>
    </>
  )
  
}

export default App
