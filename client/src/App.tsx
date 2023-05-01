import { useState } from 'react'
import './App.css'
import ShopPage from './pages/ShopPage'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
    <ShopPage/>
    </ApolloProvider>
  )

}

export default App
