import {Grid} from "@mui/material"
import { useQuery } from "@apollo/client/react";
import ProductCard from "../components/ProductCard"
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import '../styles/shop.css'
import { Product } from "../types";

function ShopPage() {
  const { loading, error, data } = useQuery(GetAllProducts);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;
const products: Product[] = data.products

  return (
    <div>
    <div id={'shop_outer_div'}>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        {products.map((product)=>
              <Grid item xs={6} md={3}>
        <ProductCard product={product}/>
        </Grid>
        )}
      </Grid>
    </div>
    </div>
  )
}

export default ShopPage