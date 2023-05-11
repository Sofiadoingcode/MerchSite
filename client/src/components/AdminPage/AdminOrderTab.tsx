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
                <p className="admin_order_tab_text">Total Amount: {order.productLines.length}</p>
            </button>
            <div className="admin_orders_content" style={{ maxHeight: expand }}>
                <Grid container gap={10}>
                    <Grid item xs={3}>
                        <Typography className="admin_orders_content_text">Order Time: {order.orderTime}</Typography>
                        <Typography className="admin_orders_content_text">Total Price: {order.totalPrice}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography className="admin_orders_content_text">Total Price: {order.totalPrice}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography className="admin_orders_content_text">e</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AdminOrderTab