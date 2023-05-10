import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';
import { ProductLineWithProduct } from '../../types';

function CartProduct({ item }: { item: ProductLineWithProduct }) {
    return (
        <>
            <Card raised sx={{ margin: 1 }}>
                <Grid container gap={5}>
                    <Grid item md={2}>
                        <CardContent>
                            <CardMedia
                                component='img'
                                sx={{ objectFit: "contain" }}
                                image={'https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg'}
                            />
                        </CardContent>
                    </Grid>
                    <Grid item md={7}>
                        <CardContent>
                            <Typography typography={'h5'} className='cart_item_text'>{item.product.name}</Typography>
                            <Typography className='cart_item_text'>Size: {item.size}</Typography>
                            <Typography className='cart_item_text'>{item.lineprice} €</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={1}>
                        <CardContent>
                            ''Remove item''
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}

export default CartProduct;