import { useQuery } from "@apollo/client";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";

function ProductCard({ product }: { product: number }) {


  return (
    <Card raised sx={{margin:'0 auto'}}>
      <CardContent>
      <CardMedia
      style={{height:200}}
        image={'https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg'}
      />
      </CardContent>
      <Grid container>
        <Grid item md={8}>
      <CardContent>
        <Typography>{product}</Typography>
      </CardContent>
      </Grid>
      <Grid item md={4}>
      <CardContent>
        <Typography>299 kr!!</Typography>
      </CardContent>
      </Grid>
      </Grid>
    </Card>
  )
}

export default ProductCard