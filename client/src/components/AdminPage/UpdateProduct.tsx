import React, {FormEvent, useState} from "react";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../../resolvers/mutations/GqlEditProduct";
import {Category, Product} from "../../types";
import {Button, Card} from "@mui/material";
import '../../styles/editproduct.css'

const UpdateProduct = (props: { product: Product }) => {
    const [editProduct, {loading, error}] = useMutation(GqlEditProduct);
    const [updateProduct, setUpdateProduct] = useState<Product>({
        id: props.product.id,
        name: props.product.name,
        description: props.product.description,
        price: props.product.price,
        category: {
            id: props.product.category.id,
            name: props.product.category.name
        },
        size: props.product.size,
        image: props.product.image,
        ratingAvg : props.product.ratingAvg
    });
    const [updateCategory, setUpdateCategory] = useState<Category>({
        id: props.product.category.id,
        name: props.product.category.name
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        if (name === 'price') {
            setUpdateProduct({...updateProduct, [name]: parseFloat(value)});
        } if (name === "size"){
           updateProduct.size = event.target.value.split(",").map((str: string) => str.trim());
        }else {
            setUpdateProduct({...updateProduct, [name]: value});
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        console.log(updateProduct);
        editProduct({
            variables: {
                id: updateProduct.id,
                input: {
                    ...updateProduct,
                },
            },
        })
            .catch((error) => {
                console.error("Error updating product", error);
            });
    };

    return (
        <>
            <td><input style={{width: '95px'}} type="string" name="name" defaultValue={props.product.name} onChange={handleInputChange}/></td>
            <td><input type="string" name="image" defaultValue={props.product.image} onChange={handleInputChange}/></td>
            <td><input type="string" name="description" defaultValue={props.product.description} onChange={handleInputChange}/></td>
            <td><input style={{width: '60px'}} type="number" name="price" defaultValue={props.product.price} onChange={handleInputChange}/></td>
            <td><input style={{width: '80px'}} type="string" name="category" defaultValue={props.product.category.name} onChange={handleInputChange}/></td>
            <td><input type="string" name= "size" defaultValue={props.product.size} onChange={handleInputChange}/></td>
            <td><Button onClick={handleSubmit} variant="contained" disabled={loading}>
                {loading ? "Updating..." : "Update Product"}
            </Button>
                {error && <p>Error updating product</p>}</td>
        </>
    );
}
export default UpdateProduct;
