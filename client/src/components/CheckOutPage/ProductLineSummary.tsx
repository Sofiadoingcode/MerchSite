import { ProductLine, ProductLineWithProduct } from "../../types"
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import '../../styles/productpage.css'
import '../../styles/checkoutpage.css'

function ProductLineSummary(props: {productLine: ProductLineWithProduct}) {
    console.log(props.productLine.lineprice)
    return (
        <div>
           <Card className={"description"}>
            <Grid container rowSpacing={1} gap={8}>
                <Grid style={{width: "60px"}}>
                    <img src={props.productLine.product.image} style={{width:"45px", height:"45px"}}/>
                </Grid>
                <Grid style={{width: "60px"}}>
                    <p className="text">Product:</p>
                    <p className="text">{props.productLine.product.name}</p>
                </Grid>
                <Grid style={{width: "60px"}}>
                    <p className="text">Size:</p>
                    <p className="text">{props.productLine.size}</p>
                </Grid>
                <Grid style={{width: "60px"}}>
                    <p className="text">Amount:</p>
                    <p className="text">{props.productLine.amount}</p>
                </Grid>
                <Grid style={{width: "60px"}}>
                    <p className="text">Price:</p>
                    <p className="text">{props.productLine.lineprice}€</p>
                </Grid>
                
            </Grid>
           </Card>
        </div>
    )
}

export default ProductLineSummary