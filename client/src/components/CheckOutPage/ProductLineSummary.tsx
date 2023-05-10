import { ProductLine, ProductLineWithProduct } from "../../types"
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import '../../styles/productpage.css'

function ProductLineSummary(props: {productLine: ProductLineWithProduct}) {
    
    return (
        <div>
           <Card className={"description"}>
            <Grid container rowSpacing={1}>
                <Grid>
                HELLo
                </Grid>
                <Grid>
                HELLo
                </Grid>
                <Grid >
                HELLo
                </Grid>
                
            </Grid>
           </Card>
        </div>
    )
}

export default ProductLineSummary