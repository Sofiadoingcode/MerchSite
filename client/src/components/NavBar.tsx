import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
    
  
    return (
      <>
        
          <AppBar position='absolute'>
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4">
              SofiaStunts
            </Typography>
              <div className='linkdiv'>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
                <NavLink to="/about" className="link">
                  About
                </NavLink>
                <NavLink to="/contact" className="link">
                  Contact
                </NavLink>
                <NavLink to="/faq" className="link">
                  FAQ
                </NavLink>
              </div>
          </Toolbar>
        </AppBar>
    </>
    )
  }
  
  export default NavBar