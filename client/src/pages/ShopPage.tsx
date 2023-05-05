import { Grid } from "@mui/material"
import { useQuery } from "@apollo/client/react";
import ProductCard from "../components/ProductCard"
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import '../styles/shop.css';
import { Product } from "../types";
import { Image } from 'mui-image';

function ShopPage() {
  const { loading, error, data } = useQuery(GetAllProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const products: Product[] = data.products

  return (
    <>
      <Image
        src="https://media.gq.com/photos/57486a68cd0aaff827f46ae6/master/pass/sharks-michael-muller-photo-book-03.jpg"
        height="10rem"
        width="100%"
        fit="cover"
        duration={2000}
        easing="cubic-bezier(0.7, 0, 0.6, 1)"
      />
    <div id={'shop_outer_div'}>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        {products.map((product)=>
              <Grid item xs={6} md={3}>
        <ProductCard product={product}/>
        </Grid>
        )}
      </Grid>
    </div>
    </>
  )
}

export default ShopPage