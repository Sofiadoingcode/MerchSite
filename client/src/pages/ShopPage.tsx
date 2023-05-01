import {Grid} from "@mui/material"
import ProductCard from "../components/ProductCard"

function ShopPage() {
  const products = [1,2,3,4,5,6,7]
  /*const { loading, error, data } = useQuery(GetAllProducts);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;*/

  return (
    <div id={'shop_outer_div'}>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        {products.map((product)=>
              <Grid item xs={12} md={3}>
        <ProductCard product={product}/>
        </Grid>
        )}
      </Grid>
    </div>
  )
}

export default ShopPage