import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CreateProduct from "../components/AdminPage/CreateProduct"
import {useCartContext, useCartDispatchContext } from "../contexts/CartContext"
import {useUserContext} from "../contexts/UserContext";

import {Category, Product} from "../types"
import React, { useState, useEffect } from "react"
import GetAllCategories from "../resolvers/queries/GqlGetAllCategories"
import {useQuery} from "@apollo/client"
import CategoryCard from "../components/Homepage/CategoryCard";
import FeaturedItems from "../components/Homepage/FeaturedItems";
import Video from "../components/Homepage/Video";
import {Grid} from "@mui/material";
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";

function HomePage() {
    const [products, setProducts] = useState<Product[]>([Object, Object, Object])
    const [categories, setCategories] = useState<Category[]>([Object, Object])
    const {loading, error, data} = useQuery(GetAllProducts, {
        onCompleted: (data) => {
            setProducts(data.products);
        }
    });

    const q = useQuery(GetAllCategories, {
        onCompleted: (data: any) => {
            setCategories(data.categories)
            console.log("Category Fetch")
        }
    });

    if (loading || q.loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    if (error) return <>`Submission error! ${error.message}`</>;
    if (q.error) return <>`Submission error! ${error.message}`</>;


    return (
        <div>
            <Grid container>
                <Grid item md={12}>
                    <Video/>
                </Grid>
                <Grid item md={12} style={{margin: '10px'}}>
                    <CategoryCard categories={categories}/>
                </Grid>
                <Grid item md={12} style={{margin: '10px'}}>
                    <FeaturedItems products={products}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage
