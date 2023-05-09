import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';

function CartProduct({ item }: { item: any }) {
    return (
        <>
            <Card raised sx={{ margin: 1 }}>
                <Grid container gap={5}>
                    <Grid item md={2}>
                        <CardContent>
                            <CardMedia
                                component='img'
                                sx={{ objectFit: "contain" }}
                                image={item.image}
                            />
                        </CardContent>
                    </Grid>
                    <Grid item md={7}>
                        <CardContent>
                            <Typography typography={'h5'} className='cart_item_text'>{item.name}</Typography>
                            <Typography className='cart_item_text'>Size: Large</Typography>
                            <Typography className='cart_item_text'>{item.price} €</Typography>
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