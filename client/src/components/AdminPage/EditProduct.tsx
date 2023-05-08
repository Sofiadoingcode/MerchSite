import React, {FormEvent, useState} from "react";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../../resolvers/mutations/GqlEditProduct";
import {Product} from "../../types";
import {Button, Card} from "@mui/material";
import '../../styles/editproduct.css'

const EditProduct = (props: { product: Product }) => {

    const [editProduct, {loading, error}] = useMutation(GqlEditProduct);
    const [updateProduct, setUpdateProduct] = useState<Product>({
        id: props.product.id,
        name: props.product.name,
        description: props.product.description,
        price: props.product.price,
        category: props.product.category,
        size: props.product.size,
    });

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;

        if (name === 'price') {
            setUpdateProduct({...updateProduct, [name]: parseFloat(value)});
        } else {
            setUpdateProduct({...updateProduct, [name]: value});
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        editProduct({
            variables: {
                id: updateProduct.id,
                input: {
                    ...updateProduct,
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
            <td><input type="string" name="name" defaultValue={props.product.name} onChange={handleInputChange}/></td>
            <td><input type="string" name="description" defaultValue={props.product.description} onChange={handleInputChange}/></td>
            <td><input type="number" name="price" defaultValue={props.product.price} onChange={handleInputChange}/></td>
            <td><input type="string" name="category" defaultValue={props.product.category} onChange={handleInputChange}/></td>
            <td><input type="string" name= "size" defaultValue={props.product.size} onChange={handleInputChange}/></td>
            <td><Button variant="contained" type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Product"}
            </Button>
                {error && <p>Error updating product</p>}</td>
        </form>
    );
}
export default EditProduct;