import {useState} from "react";
import '../styles/productpage.css'
import {useQuery} from "@apollo/client";
import {Button, Card, CardMedia, Grid, TextField} from "@mui/material";

// import GetProduct from "../resolvers/queries/GqlGetProduct";

function ProductPage() {
    const [product, setProduct] = useState('');
    // const {loading, error, data} = useQuery(GetProduct);

    return (
        // <div style={{backgroundColor: '#cbecf2', width: '100%', height: '100vh', margin: "auto"}}>
        <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            <Grid item xs={6}>
                <Card style={{marginLeft: 'auto'}}>
                    <img style={{height: '100%', width: '100%'}}
                         src={"https://www.ikea.com/dk/da/images/products/blahaj-tojdyr-haj__0710175_pe727378_s5.jpg"}
                    ></img>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <Grid className={"infoGrid container"} container rowSpacing={1}
                          columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={10}>
                            <h2>BlåHaj!</h2>
                            <h3>699 kr!</h3>
                        </Grid>
                        <Grid item xs={10}>
                            <p>Choose Size!</p>
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{height: '40px', width: '200px'}} variant="contained">Add To Cart</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid className={"description"} item xs={12}>
                <Card>
                    <div>Description</div>
                </Card>
            </Grid>
        </Grid>

        // </div>
    )
}

export default ProductPage