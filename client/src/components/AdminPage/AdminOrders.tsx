import { useQuery } from "@apollo/client";
import GetAllOrders from "../../resolvers/queries/GqlGetAllOrders";
import { Order } from "../../types";
import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AdminOrderTab from "./AdminOrderTab";

function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const { loading, error, data } = useQuery(GetAllOrders, {onCompleted: (data)=> {setOrders(data.orders)}});
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

    return (
      <Card className="admin_orders_card">
        <CardContent className="admin_orders_title">
          <Typography typography={'h4'}>Orders</Typography>
        </CardContent>
        {orders?.map((order)=>
          <AdminOrderTab order={order}/>
        )}
        
      </Card>
    )
  }
  
  export default AdminOrders