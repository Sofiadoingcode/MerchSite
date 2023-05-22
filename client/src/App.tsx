import { useState, useEffect, useReducer } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import { usePageTitle } from './usePageTitle';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import CheckOutPage from './pages/CheckOutPage';
import { CartContextProvider, useCartContext } from './contexts/CartContext';
import AdminPage from "./pages/AdminPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountPage from "./pages/AccountPage";
import Login from "./pages/LogInPage";
import { User } from './types';
import { useUserContext } from './contexts/UserContext';
import LogoutNav from './components/LogoutNav';

const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    const currentPage = usePageTitle();
    const user: User = useUserContext();

    return (
        <ApolloProvider client={client}>
            <CartContextProvider>
                <div>
                    <NavBar page={currentPage} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path='/checkout' element={<CheckOutPage />} />
                        {user.role === 'admin' &&
                            <Route path="/adminPage" element={<AdminPage />}></Route>
                        }
                        {user.id === '' ?
                            <>
                                <Route path="/signup" element={<CreateAccountPage />}></Route>
                                <Route path="/login" element={<Login />}></Route>
                            </> :
                            <Route path="/logout" element={<LogoutNav />}></Route>
                        }
                        <Route path="/account" element={<AccountPage />}></Route>
                        <Route path="*" element={<h1>Page Not Found !!!!</h1>} />
                    </Routes>
                    <Footer />
                </div>
            </CartContextProvider>
        </ApolloProvider>

    )

}

export default App
