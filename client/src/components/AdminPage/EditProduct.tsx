import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../../resolvers/mutations/GqlEditProduct";
import {Product} from "../../types";
import {Button, Card} from "@mui/material";
import '../../styles/editproduct.css'

const EditProduct = (props: { product: Product }) => {
    const [input, setInput] = useState(props.product);
    const [editProduct, {loading, error}] = useMutation(GqlEditProduct);

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;

        if (name === 'price') {
            setInput({...input, [name]: parseFloat(value)});
        } else {
            setInput({...input, [name]: value});
        }
    };


    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("About To Edit!")
        editProduct({
            variables: {
                id: props.product.id,
                input: {
                    // id: product.id,
                    ...input,
                },
            },
        })
            .then((result) => {
                console.log("Product updated successfully", result);
            })
            .catch((error) => {
                console.error("Error updating product", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={input.name} onChange={handleInputChange}/>
            </label>
            <div style={{display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: "1rem"}}>
                <label>
                    Description:
                    <textarea name="description" value={input.description} onChange={handleInputChange}/>
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={input.price} onChange={handleInputChange}/>
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={input.category} onChange={handleInputChange}/>
                </label>
                <label>
                    Size:
                    <input type="text" name="size" value={input.size} onChange={handleInputChange}/>
                </label>
            </div>

            <Button variant="contained" type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Product"}
            </Button>
            {error && <p>Error updating product</p>}
        </form>
    );
}
export default EditProduct;