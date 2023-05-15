import {Category, Product} from "../../types";
import {Card, CardContent, Grid} from "@mui/material";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useQuery} from "@apollo/client";
import GetAllCategories from "../../resolvers/queries/GqlGetAllCategories";
import getProductFromCategory from "../../resolvers/queries/GqlGetProductByCategory";

function CategoryCard({categories}: {categories: Category[]}) {

    return (
        <Grid container spacing={4}>
            <Grid item md={6}>
                <NavLink style={{textDecoration: 'none'}} to={`shop`}>
                    <Card raised>
                        <CardContent style={{textAlign: 'center'}}>
                            <h1>
                                {categories[0].name}
                            </h1>
                            <img style={{width: '10rem', height: '7.5rem'}}
                                 src={"https://www.ikea.com/dk/da/images/products/blahaj-tojdyr-haj__0710175_pe727378_s5.jpg"}/>
                        </CardContent>
                    </Card>
                </NavLink>
            </Grid>
            <Grid item md={6}>
                <Card raised>
                    <NavLink style={{textDecoration: 'none'}} to={`shop`}>
                        <CardContent style={{textAlign: 'center'}}>
                            <h1>
                                {categories[1].name}
                            </h1>
                            <img style={{width: '10rem', height: '7.5rem'}}
                                 src={"https://cdn2.yamaha-motor.eu/prod/accessories/APPAREL/Apparel/B22-FT117-E0-0L-Paddock-Blue-Team-Hoodie-_Men_-EU-Studio-001.jpg"}/>
                        </CardContent>
                    </NavLink>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CategoryCard