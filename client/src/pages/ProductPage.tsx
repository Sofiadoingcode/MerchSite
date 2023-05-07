import React, {useState} from "react";
import '../styles/productpage.css'
import {useQuery} from "@apollo/client";
import {Button, Card, CardMedia, Grid, TextField} from "@mui/material";
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import GetProduct from "../resolvers/queries/GqlGetProduct";
import {useParams} from "react-router-dom";
import {useCartDispatchContext} from "../contexts/CartContext";
import {Product} from "../types";


function handleAddToCartClick(item: Product, dispatch: React.Dispatch<any>) {
    dispatch({ type: 'added', item: item });
}


function ProductPage() {
    const {productId} = useParams();
    const {loading, error, data} = useQuery(GetProduct, {
        variables: {productId},
    });

    const dispatch = useCartDispatchContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.product) return <p>No product found.</p>;

    const product = data.product;



    return (
        <Grid style={{backgroundColor: '#cbecf2'}} container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            <Grid item xs={6}>
                <Card className={"pictureAndInfo"} style={{marginLeft: 'auto'}}>
                    <img style={{height: '100%', width: '100%'}}
                         src={"https://www.ikea.com/dk/da/images/products/blahaj-tojdyr-haj__0710175_pe727378_s5.jpg"}
                    ></img>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={"pictureAndInfo"}>
                    <Grid className={"infoGrid container"} container rowSpacing={1}
                          columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={9}>
                            <h2>{product.name}</h2>
                        </Grid>
                        <Grid item xs={2}>
                            <svg style={{marginLeft: '5%'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                 fill="currentColor"
                                 className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </Grid>
                        <Grid item xs={12}>
                            <Card className={"description"}>
                                <p style={{fontSize: '20px'}}><strong>Description</strong></p>
                                <p style={{fontSize: '15px'}}>{product.description}</p>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="size" style={{fontSize: '25px'}}>Size:</label>
                            <br/>
                            <select id="size" name="size">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </Grid>
                        <Grid item xs={5}>
                            <h3>{product.price} DKK</h3>
                            <Button style={{height: '40px', width: '200px'}} variant="contained"
                                    onClick={() => handleAddToCartClick(product, dispatch)}>Add To Cart</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>

    )
}

export default ProductPage
