import { Card } from "@mui/material"
import AdminMenuOptions from "./AdminMenuOptions"

function AdminMenu({setDisplay}:{setDisplay:React.Dispatch<React.SetStateAction<string>>}) {
  
    return (
      <Card className="admin_menu_div">
        <h2 id="admin_header">Admin Page</h2>
        <AdminMenuOptions setDisplay={setDisplay} value={'orders'}>
            <p className="admin_menu_buttons_text">Administrate Orders</p>
        </AdminMenuOptions>
        <AdminMenuOptions setDisplay={setDisplay} value={'create'}>
            <p className="admin_menu_buttons_text">Add Item</p>
        </AdminMenuOptions>
        <AdminMenuOptions setDisplay={setDisplay} value={'products'}>
            <p className="admin_menu_buttons_text">Administrate Items</p>
        </AdminMenuOptions>
      </Card>
    )
  }
  
  export default AdminMenu