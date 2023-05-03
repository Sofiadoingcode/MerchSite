import { useState } from 'react'
import './App.css'
import ShopPage from './pages/ShopPage'
import { usePageTitle } from './usePageTitle';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import ProductPage from "./pages/ProductPage";


const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <NavBar page={currentPage}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/product/:productId" element={<ProductPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
        </Routes>
        <Footer/>

      </div>
    </ApolloProvider>
  )

}

export default App
