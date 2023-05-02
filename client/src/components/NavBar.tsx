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

function NavBar(props: {page: String}) {
    
  
    return (
      <>
        
          <AppBar position='absolute'>
          <CssBaseline />
          <Toolbar className='navbar'>
              <div className='navbarleft'>
                <Typography variant="h4">
                  SofiaStunts
                </Typography>
              </div>
              <div className='navbarright'>
                {props.page=="HOMEPAGE" && <NavLink to="/shop" className="link">
                  SHOP
                </NavLink>}
                {props.page!="HOMEPAGE" && <NavLink to="/" className="link">
                  HOMEPAGE
                </NavLink>}
                
                <NavLink to="/wishlist" className="link">
                  <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.5C1 5.21475 3.31333 2 7 2C8.70883 2 9.92877 2.48125 10.8649 3.2079C11.3091 3.55266 11.6802 3.94929 11.9974 4.33639C12.311 3.95011 12.6785 3.55357 13.1186 3.20977C14.0531 2.47979 15.275 2 17 2C20.7289 2 23 5.22013 23 8.5C23 11.8412 21.3259 14.6994 19.2285 16.9297C17.1279 19.1634 14.523 20.8565 12.4472 21.8944C12.1657 22.0352 11.8343 22.0352 11.5528 21.8944C9.47698 20.8565 6.8721 19.1634 4.77151 16.9297C2.67415 14.6994 1 11.8412 1 8.5ZM7 4C4.68667 4 3 6.02986 3 8.5C3 11.1445 4.32585 13.5363 6.22849 15.5596C7.9833 17.4256 10.1612 18.9027 12 19.8754C13.8388 18.9027 16.0167 17.4256 17.7715 15.5596C19.6741 13.5363 21 11.1445 21 8.5C21 6.02448 19.3463 4 17 4C15.6874 4 14.907 4.35067 14.3497 4.78592C13.8333 5.18934 13.4736 5.68102 13.045 6.26703C12.9669 6.37374 12.8866 6.48357 12.8026 6.59656C12.6139 6.85039 12.3163 7 12 7C11.6837 7 11.3861 6.85039 11.1974 6.59656C11.1256 6.49997 11.0562 6.4055 10.9884 6.31318C10.5465 5.71179 10.1717 5.20159 9.63856 4.78779C9.07355 4.34922 8.29117 4 7 4Z" fill="white"/>
                  </svg>
                </NavLink>
                <NavLink to="/cart" className="link">
                  <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z" fill="white"/>
                  </svg>
                </NavLink>
              </div>
          </Toolbar>
        </AppBar>
    </>
    )
  }
  
  export default NavBar