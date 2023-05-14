import React, {useState} from 'react';
import {Order, ProductLine, User} from "../../types";
import {Button, Grid, Table} from "@mui/material";
import {useQuery} from "@apollo/client";
import ordersByUser from "../../resolvers/queries/GqlOrdersByUser";
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import '../../styles/usersOrders.css'
import PopUp from "../AccountPage/PopUp"

function UserOrders(props: { user: User }) {

    const [orders, setOrders] = useState<Order[]>([])
    const [openPopUp, setOpenPopUp] = useState(false);
    const {loading, error, data} = useQuery(ordersByUser, {
        variables: {id: props.user.id}, onCompleted: (data) => {
            setOrders(data.products);
        }
    });
    const handleSubmit = () => {
        setOpenPopUp(true)
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.table(data)
    return (
        <>
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
                    {data.ordersByUser.map((order: Order) =>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.address.country} {order.address.city} {order.address.postalCode} {order.address.streetAddress} </td>
                            <td>
                                <Grid item xs={5}>
                                    <Button style={{height: '40px', width: '200px'}} variant="contained"
                                            onClick={handleSubmit}>items</Button>
                                    {openPopUp ? <PopUp text={order.id} order = {order} setOpenPopUp={setOpenPopUp}>
                                    </PopUp> : null}
                                </Grid>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserOrders;