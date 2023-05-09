import GqlCreateProduct from "../../resolvers/mutations/GqlCreateProduct"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import GqlGetAllProducts from "../../resolvers/queries/GqlGetAllProducts";

function CreateProduct() {
    const initialState = {name: '', description: '', price: 0, category: {id: '', name: ''}, size: [], image: ''}
    const [product, setProduct] = useState(initialState)
    const cat = {id: "6458d6dffb3fb651f2812d36", name: 'category'}
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateProduct, {
        refetchQueries: [GqlGetAllProducts]
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
                <input type='text' style={{margin: 5}} required placeholder='Category' value={product?.category.name}
                       onChange={(evt) => {
                           setProduct({...product, category: cat})
                       }}></input>
                <input type='text' style={{margin: 5}} placeholder='Size' value={product?.size} onChange={(evt) => {
                    setProduct({...product, size: []})
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