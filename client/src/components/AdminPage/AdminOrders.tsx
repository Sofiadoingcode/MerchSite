import { useQuery } from "@apollo/client";
import GetAllOrders from "../../resolvers/queries/GqlGetAllOrders";
import { Order, OrderWithEverything } from "../../types";
import { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import AdminOrderTab from "./AdminOrderTab";
import ProductLineSummary from "../CheckOutPage/ProductLineSummary";

function AdminOrders() {
  const initialState : OrderWithEverything = {id:'', totalPrice: 0, orderTime: '', 
  address: {id:'', country:'', city: '', postalCode:'', streetAddress:''},
  user: {id:'', username:'', password:'', role:'', email:'', name:'', phone:''},
  productLines: []
  }
  const [orders, setOrders] = useState<OrderWithEverything[]>([])
  const [activeOrder, setActiveOrder] = useState<OrderWithEverything>(initialState)
  const { loading, error, data } = useQuery(GetAllOrders, {onCompleted: (data)=> {setOrders(data.orders)}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

    return (
      <Grid container xs={9} gap={10} className="admin_orders_grid">
        <Grid item xs={5}>
      <Card>
        <CardContent className="admin_orders_title">
          <Typography typography={'h4'}>Orders</Typography>
        </CardContent>
        {orders?.map((order)=>
          <AdminOrderTab key={order.id} order={order} initialState={initialState} activeOrder={activeOrder} setActiveOrder={setActiveOrder}/>
        )}
      </Card>
      </Grid>
      <Grid item xs={6}>
      <Card className="admin_orders_productlines">
        <CardContent className="admin_orders_title">
          <Typography typography={'h4'}>ProductLines</Typography>
        </CardContent>
        <CardContent className="admin_orders_title">
          <Typography typography={'h6'}>Order ID: {activeOrder?.id}</Typography>
        </CardContent>
        {activeOrder.productLines?.map((productLine)=>
        <ProductLineSummary productLine={productLine}/>
        )}
        
      </Card>
      </Grid>
      </Grid>
    )
  }
  
  export default AdminOrders