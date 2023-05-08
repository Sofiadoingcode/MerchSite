import React from 'react';

import {useMutation} from "@apollo/client";
import GqlCreateProduct from "../resolvers/mutations/GqlCreateProduct";
import GqlGetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import {useQuery} from "@apollo/client/react";
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import EditProduct from './AdminPage/EditProduct';
import DeleteProduct from './AdminPage/DeleteProduct';

function EditProducts() {
    const {loading, error, data} = useQuery(GetAllProducts);
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    return (

        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {data.products.map((product: any) => (<tr>
                    <td>  {product.id}  </td>
                    <td> <input type = "string" defaultValue={product.name} /> </td>
                    <td> <input type = "string" defaultValue={product.description} /> </td>
                    <td> <input type = "number" defaultValue={product.price} /> </td>
                    <td> <input type = "string" defaultValue={product.category} /> </td>
                    <td> <input type = "string" defaultValue={product.size} /> </td>
                    <td> <EditProduct product={product}/></td>
                    <td> <button> <DeleteProduct productID={product.id}/> </button></td>
                </tr>))}
            </table>

        </div>
    );
}

export default EditProducts;