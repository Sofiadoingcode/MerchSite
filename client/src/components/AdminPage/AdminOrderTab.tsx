import { useState } from "react"
import { Order, OrderWithEverything } from "../../types"
import { Card, Grid, Typography } from "@mui/material"

function AdminOrderTab({ order, initialState, activeOrder, setActiveOrder }: { order: OrderWithEverything, initialState: OrderWithEverything, activeOrder: OrderWithEverything, setActiveOrder: React.Dispatch<React.SetStateAction<OrderWithEverything>> }) {
    const [expand, setExpand] = useState<number>(0)
    const [classes, setClasses] = useState<string>("admin_orders_collapsible")

    function handleCollapsible(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let content = evt.currentTarget.nextElementSibling
        if (expand === 0) {
            if (content?.scrollHeight) {
                setExpand(content.scrollHeight)
                setClasses("admin_orders_collapsible active")
            }
            setActiveOrder(order)
        }
        else {
            setExpand(0)
            setClasses("admin_orders_collapsible")
            if (activeOrder.id === order.id) {
                setActiveOrder(initialState)
            }
        }
    }

    return (
        <div id="admin_order_tab_div">
            <button type="button" className={classes} onClick={handleCollapsible}>
                <p className="admin_order_tab_text">OrderId: {order.id}</p>
                <p className="admin_order_tab_text">Name: {order.user.name}</p>
                <p className="admin_order_tab_text">ProductLines: {order.productLines.length}</p>
            </button>
            <div className="admin_orders_content" style={{ maxHeight: expand }}>
                <Card>
                    <Typography className="admin_orders_content_text" typography={'h6'}>Order Info</Typography>
                    <Typography className="admin_orders_content_text" sx={{fontSize:14}}>ID: {order.id}</Typography>
                    <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Order Time: {order.orderTime}</Typography>
                    <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Total Price: {order.totalPrice}</Typography>
                </Card>
                <Grid container gap={2} className="admin_orders_content_grid">
                    <Grid item xs={5.8}>
                        <Card>
                            <Typography className="admin_orders_content_text" typography={'h6'}>Address Info</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>ID: {order.address.id}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Street Address: {order.address.streetAddress}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Postal Code: {order.address.postalCode}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>City: {order.address.city}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Country: {order.address.country}</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Card>
                            <Typography className="admin_orders_content_text" typography={'h6'}>Customer Info</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>ID: {order.user.id}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Name: {order.user.name}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Username: {order.user.username}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Email: {order.user.email}</Typography>
                            <Typography className="admin_orders_content_text" sx={{fontSize:14}}>Phone Number: {order.user.phone}</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AdminOrderTab