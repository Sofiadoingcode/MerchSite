import { Grid } from "@mui/material"
import { useQuery } from "@apollo/client/react";
import ProductCard from "../components/ShopPage/ProductCard"
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import '../styles/shop.css';
import { Category, Product } from "../types";
import { Image } from 'mui-image';
import SearchBar from "../components/ShopPage/SearchBar";
import { useState, useEffect } from "react";
import CategoryDropDown from "../components/ShopPage/CategoryDropDown";
import GetAllCategories from "../resolvers/queries/GqlGetAllCategories";

function ShopPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [value, setValue] = useState<string>('');

  const catData = useQuery(GetAllCategories, {onCompleted: (data)=> {setCategories(data.categories)}});
  const { loading, error, data } = useQuery(GetAllProducts, {onCompleted: (data)=> {setAllProducts(data.products); setFilteredProducts(data.products)}});

    useEffect(() => {
      let filtered: Product[] = allProducts?.filter((product) => {
        return product.name.toLowerCase().match(searchInput.toLowerCase());
      });
      if(value.length > 0){
          filtered = filtered?.filter((product) => {
          return product.category.id === value;
        });
      }
      setFilteredProducts(filtered)
  }, [value, searchInput])
  if (loading || catData.loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (catData.error) return <p>Error : {catData.error.message}</p>;

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
      <Grid container gap={10}>
        <Grid item xs={6} md={5}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
        </Grid>
        <Grid item xs={6} md={5}>
        <CategoryDropDown items={categories} value={value} setValue={setValue}/>
        </Grid>
      </Grid>
    <div id={'shop_outer_div'}>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        {filteredProducts?.map((product)=>
              <Grid item key={product.id} xs={6} md={3}>
        <ProductCard product={product}/>
        </Grid>
        )}
      </Grid>
    </div>
    </>
  )
}

export default ShopPage