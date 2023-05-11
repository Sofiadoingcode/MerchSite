import {Category} from "../../types";
import {Card, CardContent, Grid} from "@mui/material";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useQuery} from "@apollo/client";
import GetAllCategories from "../../resolvers/queries/GqlGetAllCategories";

function CategoryCard() {

    const [categories, setCategories] = useState<Category[]>([])

    const {loading, error, data} = useQuery(GetAllCategories, {
        onCompleted: (data: any) => {
            setCategories(data.categories)
        }
    });

    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const category1 = categories[Math.floor(Math.random() * categories.length)];

    const category2 = categories[Math.floor(Math.random() * categories.length)];

    return (
        <Grid container>
            <Grid item md={6}>
                <Card raised>
                    {/*<NavLink to={`shop/${category1.name}`}>*/}
                    <NavLink style={{textDecoration: 'none'}} to={`shop`}>
                        <h1>
                            {category1.name}
                        </h1>
                    </NavLink>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Card raised>
                    <NavLink style={{textDecoration: 'none'}} to={`shop`}>
                        <h1>
                            {category2.name}
                        </h1>
                    </NavLink>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CategoryCard