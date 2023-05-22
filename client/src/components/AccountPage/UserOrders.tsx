import React, {useState} from 'react';
import {Order, OrderWithEverything, ProductLine, User} from "../../types";
import {Button, Card, CardContent, Grid, Table, Typography} from "@mui/material";
import {useQuery} from "@apollo/client";
import ordersByUser from "../../resolvers/queries/GqlOrdersByUser";
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts";
import '../../styles/usersOrders.css'
import PopUp from "../AccountPage/PopUp"
import ProductLineSummary from "../CheckOutPage/ProductLineSummary";
import AdminOrderTab from "../AdminPage/AdminOrderTab";

function UserOrders(props: { user: User }) {

    const initialState: OrderWithEverything = {
        id: '', totalPrice: 0, orderTime: '',
        address: {id: '', country: '', city: '', postalCode: '', streetAddress: ''},
        user: {id: '', username: '', password: '', role: '', email: '', name: '', phone: ''},
        productLines: []
    }
    const [openPopUp, setOpenPopUp] = useState(false);
    const {loading, error, data} = useQuery(ordersByUser, {
        variables: {ordersByUserId: props.user.id},
    });

    const [orders, setOrders] = useState<OrderWithEverything[]>([])
    const [activeOrder, setActiveOrder] = useState<OrderWithEverything>(initialState)

    console.log(props.user.id)

    const handleSubmit = () => {
        setOpenPopUp(true)
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Grid container xs={9} gap={10} className="admin_orders_grid">
            <Grid item xs={5}>
                <Card>
                    <CardContent className="admin_orders_title">
                        <Typography typography={'h4'}>Orders</Typography>
                    </CardContent>
                    {data.ordersByUser?.map((order: OrderWithEverything) =>
                        <AdminOrderTab key={order.id} order={order} initialState={initialState}
                                       activeOrder={activeOrder} setActiveOrder={setActiveOrder}/>
                    )}
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className="admin_orders_productlines">
                    <CardContent className="admin_orders_title">
                        <Typography typography={'h4'}>Items in order</Typography>
                    </CardContent>
                    <CardContent className="admin_orders_title">
                        <Typography typography={'h6'}>Orders: {activeOrder?.orderTime}</Typography>
                    </CardContent>
                    {activeOrder.productLines?.map((productLine) =>
                        <ProductLineSummary productLine={productLine}/>
                    )}
                </Card>
            </Grid>
        </Grid>
    );
}

export default UserOrders;