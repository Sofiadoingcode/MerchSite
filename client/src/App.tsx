import { useState , useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { usePageTitle } from './usePageTitle';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const currentPage = usePageTitle();

  return (
    <ApolloProvider client={client}>
      <div>
        <NavBar page={currentPage}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
        </Routes>
        <Footer/>

      </div>
    </ApolloProvider>

  )
  
}

export default App
