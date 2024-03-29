import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
    <Router>
      <App />
    </Router>
    </UserContextProvider>
  </React.StrictMode>,
)
