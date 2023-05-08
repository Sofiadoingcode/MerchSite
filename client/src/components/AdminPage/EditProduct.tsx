import React, {FormEvent, useState} from "react";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../../resolvers/mutations/GqlEditProduct";
import {Product} from "../../types";
import {Button, Card} from "@mui/material";
import '../../styles/editproduct.css'

const EditProduct = (props: { product: Product }) => {
    const [editProduct, {loading, error}] = useMutation(GqlEditProduct);

    const handleSubmit = (event: FormEvent<T>) => {
        event.preventDefault();
        console.log("About To Edit!")
        console.log("I'm a prop product: " + props.product.id)
        editProduct({
            variables: {
                id: props.product.id,
                input: {
                    ...props.product,
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
            <Button variant="contained" type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Product"}
            </Button>
            {error && <p>Error updating product</p>}
        </form>
    );
}
export default EditProduct;