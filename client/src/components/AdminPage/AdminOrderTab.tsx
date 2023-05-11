import { Order } from "../../types"

function AdminOrderTab({order}:{order:Order}) {

    return (
        <>
            <button type="button" className="admin_orders_collapsible">OrderId: {order.id} Name:  Total Amount:</button>
            <div className="admin_orders_content">
                <p>Lorem ipsum...</p>
            </div>
        </>
    )
}

export default AdminOrderTab