import GqlCreateProduct from "../../resolvers/mutations/GqlCreateProduct"
import {useState} from "react"
import {useMutation, useQuery} from "@apollo/client"
import GqlGetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import GetAllCategories from "../../resolvers/queries/GqlGetAllCategories";
import { Category } from "../../types";
import CategoryDropDown from "../ShopPage/CategoryDropDown";

function CreateProduct() {
    const [categories, setCategories] = useState<Category[]>([])
    const [value, setValue] = useState<string>('')
    const initialState = {name: '', description: '', price: 0, categoryId: '', size: [''], image: ''}
    const [product, setProduct] = useState(initialState)
    const catData = useQuery(GetAllCategories, {onCompleted: (data)=> {setCategories(data.categories)}});
    console.log("??")
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateProduct, {
        refetchQueries: [GqlGetAllProducts]
    })

    if (loading || catData.loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (catData.error) return <p>Error : {catData.error.message}</p>;
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        product.categoryId = value
        mutateFunction({
            variables: {
                input: product
            }
        })
        setProduct(initialState)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} style={{margin: 30}}>
                <input type='text' style={{margin: 5}} required placeholder='Name' value={product?.name}
                       onChange={(evt) => {
                           setProduct({...product, name: evt.target.value})
                       }}></input>
                <input type='text' style={{margin: 5}} required placeholder='Description' value={product?.description}
                       onChange={(evt) => {
                           setProduct({...product, description: evt.target.value})
                       }}></input>
                <input type='number' style={{margin: 5}} required placeholder='Price' value={product?.price}
                       onChange={(evt) => {
                           setProduct({...product, price: evt.target.valueAsNumber})
                       }}></input>
                       <div style={{width:'18%'}}>
                       <CategoryDropDown items={categories} value={value} setValue={setValue}/>
                       </div>
                <input type='text' style={{margin: 5}} placeholder='Size' value={product?.size.toString()} onChange={(evt) => {
                    let arr: string[] = evt.target.value.split(",").map(str => str.trim())
                    setProduct({...product, size: arr})
                }}></input>
                <input type='text' style={{margin: 5}} placeholder='Image' value={product?.image} onChange={(evt) => {
                    setProduct({...product, image: evt.target.value})
                }}></input>
                <input type='submit' style={{margin: 5}} value={"Create Product"}/>
            </form>
        </div>
    )
}

export default CreateProduct