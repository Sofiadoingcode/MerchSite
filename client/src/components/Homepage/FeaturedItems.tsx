import {useQuery} from "@apollo/client/react";
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import React, {useState} from "react";
import {Product} from "../../types";
import {Card, Grid} from "@mui/material";
import ProductCard from "../ShopPage/ProductCard";

function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const {loading, error, data} = useQuery(GetAllProducts, {
        onCompleted: (data) => {
            setProducts(data.products);
        }
    });

    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;


    const product1 = products[Math.floor(Math.random() * products.length)];
    const product2 = products[Math.floor(Math.random() * products.length)];
    const product3 = products[Math.floor(Math.random() * products.length)];

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <ProductCard product={product1}/>
                </Grid>
                <Grid item xs={4}>
                    <ProductCard product={product2}/>
                </Grid>
                <Grid item xs={4}>
                    <ProductCard product={product3}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeaturedProducts