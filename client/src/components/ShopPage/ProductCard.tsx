import { useQuery } from "@apollo/client";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import { Product } from "../../types";
import { NavLink } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {

  return (
    <NavLink to={`/product/${product.id}`} className="link_card">
      <Card raised sx={{ margin: '0 auto' }}>
        <CardContent>
          <CardMedia
            style={{ height: 200 }}
            image={product.image}
          />
        </CardContent>
        <Grid container>
          <Grid item md={8}>
            <CardContent>
              <Typography>{product.name}</Typography>
            </CardContent>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography>{product.price} €</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </NavLink>
  )
}

export default ProductCard