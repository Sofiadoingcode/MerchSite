import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CreateProduct from "../components/AdminPage/CreateProduct"
import {useCartContext, useCartDispatchContext } from "../contexts/CartContext"
import {useUserContext} from "../contexts/UserContext";

import { Category } from "../types"
import React, { useState, useEffect } from "react"
import GetAllCategories from "../resolvers/queries/GqlGetAllCategories"
import {useQuery} from "@apollo/client"
import CategoryCard from "../components/Homepage/CategoryCard";
import FeaturedItems from "../components/Homepage/FeaturedItems";
import Video from "../components/Homepage/Video";
import {Grid} from "@mui/material";

function HomePage() {
    const dispatch = useCartDispatchContext()




    return (
        <div>
            <Grid container>
                <Grid item md={12}>
                    <Video></Video>
                </Grid>
                <Grid item md={12}>
                    <CategoryCard></CategoryCard>
                </Grid>
                <Grid item md={12}>
                    <FeaturedItems></FeaturedItems>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage
