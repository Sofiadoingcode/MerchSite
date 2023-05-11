import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';
import {useCartDispatchContext} from "../../contexts/CartContext";
import {CartActions, Product} from "../../types";

function CartProduct({ item, changedCart, setChangedCart }: { item: Product, changedCart: boolean, setChangedCart: React.Dispatch<React.SetStateAction<boolean>> }) {

    const dispatch = useCartDispatchContext();

    function handleDelete(item: Product, dispatch: React.Dispatch<CartActions>) {
        dispatch({ type: 'removed', item: item });
        setChangedCart(!changedCart);
    }

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
                            <button onClick={() => handleDelete(item, dispatch)} className={"delete_from_cart_button"}>X</button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}

export default CartProduct;