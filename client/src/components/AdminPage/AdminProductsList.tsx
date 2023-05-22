import React, {useState} from 'react';

import {useMutation} from "@apollo/client";
import GqlCreateProduct from "../../resolvers/mutations/GqlCreateProduct";
import {useQuery} from "@apollo/client/react";
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import DeleteProduct from '../AdminPage/DeleteProduct';
import {Product} from "../../types";
import UpdateProduct from "./UpdateProduct";

function AdminProductsList() {
    const {loading, error, data} = useQuery(GetAllProducts);


    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;


    return (



        <div style={{width: '75%'}}>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th style={{width: '50%'}}>Price</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>

                {data.products.map((product: Product) => (<tr>
                    <td>{product.id}</td>
                    <UpdateProduct product={product}/>
                    <td>
                        <button><DeleteProduct productID={product.id}/></button>
                    </td>
                </tr>))}
            </table>
        </div>
    );
}

export default AdminProductsList;
