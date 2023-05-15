import React, {useState} from 'react';
import {Order, OrderWithEverything, ProductLine, User} from "../../types";
import {Button, Grid, Table} from "@mui/material";
import {useQuery} from "@apollo/client";
import ordersByUser from "../../resolvers/queries/GqlOrdersByUser";
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import '../../styles/usersOrders.css'
import PopUp from "../AccountPage/PopUp"
import ProductLineSummary from "../CheckOutPage/ProductLineSummary";

function UserOrders(props: { user: User }) {


    const [openPopUp, setOpenPopUp] = useState(false);
    const {loading, error, data} = useQuery(ordersByUser, {
        variables: {ordersByUserId: props.user.id},
    });

    console.log(props.user.id)

    const handleSubmit = () => {
        setOpenPopUp(true)
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.table(data)
    return (

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Total Price</th>
                        <th>Address</th>
                        <th> items</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.ordersByUser.map((order: OrderWithEverything) =>
                        <tr key = {order.id}>
                            <td>{order.id}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.address.country} {order.address.city} {order.address.postalCode} {order.address.streetAddress} </td>
                            <td>
                                <Grid item xs={5}>
                                    <Button style={{height: '40px', width: '200px'}} variant="contained"
                                            onClick={handleSubmit}>items</Button>
                                    {openPopUp ? <PopUp text={order.id} order={order} setOpenPopUp={setOpenPopUp}>

                                        {order.productLines?.map((productLine) =>
                                            <ProductLineSummary productLine= {productLine}/> )}

                                    </PopUp> : null}
                                </Grid>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

    );
}

export default UserOrders;