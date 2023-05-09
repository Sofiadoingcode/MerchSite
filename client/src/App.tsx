import {useState, useEffect, useReducer} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {usePageTitle} from './usePageTitle';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import CheckOutPage from './pages/CheckOutPage';
import {CartContextProvider} from './contexts/CartContext';
import AdminPage from "./pages/AdminPage";
import SignInPage from "./pages/SignInPage";
import CreateAccountPage from "./pages/CreateAccountPage";


const client = new ApolloClient({
    uri: 'http://localhost:4001/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const currentPage = usePageTitle();
    return (
        <ApolloProvider client={client}>
            <CartContextProvider>
                <div>
                    <NavBar page={currentPage}/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/shop" element={<ShopPage/>}/>
                        <Route path="/product/:productId" element={<ProductPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path='/checkout' element={<CheckOutPage/>}/>
                        <Route path="/adminPage" element={<AdminPage/>}></Route>
                        <Route path="/createaccount" element={<CreateAccountPage/>}></Route>
                        <Route path="/signin" element={<SignInPage/>}></Route>
                        <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
                    </Routes>
                    <Footer/>
                </div>
            </CartContextProvider>
        </ApolloProvider>

    )

}

export default App
