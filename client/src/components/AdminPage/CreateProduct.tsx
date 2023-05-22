import GqlCreateProduct from "../../resolvers/mutations/GqlCreateProduct"
import {useState} from "react"
import {useMutation, useQuery} from "@apollo/client"
import GqlGetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import GetAllCategories from "../../resolvers/queries/GqlGetAllCategories";
import {Category} from "../../types";
import CategoryDropDown from "../ShopPage/CategoryDropDown";
import {Button, Grid} from "@mui/material";

function CreateProduct() {
    const [categories, setCategories] = useState<Category[]>([])
    const [value, setValue] = useState<string>('')
    const initialState = {name: '', description: '', price: 0, categoryId: '', size: [''], image: ''}
    const [product, setProduct] = useState(initialState)
    const catData = useQuery(GetAllCategories, {
        onCompleted: (data) => {
            setCategories(data.categories)
        }
    });
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateProduct, {
        refetchQueries: [GqlGetAllProducts]
    })

    if (loading || catData.loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (catData.error) return <p>Error : {catData.error.message}</p>;
    const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

        product.categoryId = value
        mutateFunction({
            variables: {
                input: product
            }
        })
        setProduct(initialState)
        setValue('')
    }

    return (
        <div style={{width: '80%'}}>
            <Grid container style={{marginLeft: '2.5%'}}>
                <Grid item xs={3}>
                    <h2>Name</h2>
                    <input type='text' className={"create_product_input"} style={{margin: 5}} required
                           placeholder='Name' value={product?.name}
                           onChange={(evt) => {
                               setProduct({...product, name: evt.target.value})
                           }}></input>
                    <h3>Description</h3>
                    <input type='text' style={{margin: 5}} required placeholder='Description'
                           value={product?.description}
                           onChange={(evt) => {
                               setProduct({...product, description: evt.target.value})
                           }}></input>
                    <h3>Price</h3>
                    <input type='number' style={{margin: 5}} required placeholder='Price' value={product?.price}
                           onChange={(evt) => {
                               setProduct({...product, price: evt.target.valueAsNumber})
                           }}></input>
                </Grid>
                <Grid item xs={3}>

                    <div style={{width: '75%'}}>
                        <h3>Category</h3>
                        <CategoryDropDown items={categories} value={value} setValue={setValue}/>
                    </div>
                    <h3>Size</h3>
                    <input type='text' style={{margin: 5}} placeholder='Size' value={product?.size.toString()}
                           onChange={(evt) => {
                               let arr: string[] = evt.target.value.split(",").map(str => str.trim())
                               setProduct({...product, size: arr})
                           }}></input>
                    <h3>Image URL</h3>
                    <input type='text' style={{margin: 5}} placeholder='Image' required value={product?.image}
                           onChange={(evt) => {
                               setProduct({...product, image: evt.target.value})
                           }}></input>
                    <br/>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    <Button style={{height: '40px', width: '200px'}} variant="contained"
                            onClick={handleOnSubmit}
                    >Create Product</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateProduct