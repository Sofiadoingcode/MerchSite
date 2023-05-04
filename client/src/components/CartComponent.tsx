import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import CheckOutPage from '../pages/CheckOutPage';
import { NavLink } from 'react-router-dom';

function CartComponent({totalPrice}:{totalPrice:number}) {
    return (
        <>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={8} md={9}>
                    <Typography typography={'h4'} style={{marginLeft:'2rem'}}>Total Price</Typography>
                    </Grid>
                    <Grid item xs={4} md={3}>
                    <Typography typography={'h5'} style={{marginTop:'4rem'}}>{totalPrice} €</Typography>
                    </Grid>
                    </Grid>
                    <div className='cart_checkout_div'>
                    <NavLink to={`/checkout`} className="link_card" id='cart_checkout_link'>
                        <button id='cart_checkout_button'> Checkout</button>
                    </NavLink>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default CartComponent;