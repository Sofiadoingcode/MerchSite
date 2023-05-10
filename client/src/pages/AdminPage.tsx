import CreateProduct from "../components/AdminPage/CreateProduct";
import AdminProductsList from "../components/AdminPage/AdminProductsList";
import {useEffect, useState} from "react";
import '../styles/adminpage.css'
import AdminOrders from "../components/AdminPage/AdminOrders";
import AdminMenu from "../components/AdminPage/AdminMenu";

function AdminPage() {
    const [display, setDisplay] = useState<string>('menu');

    return (
      <div id="adminpage_outer_div">
          <div className={display === 'menu' ? 'menu_active' : 'menu_inactive'}>
           <AdminMenu setDisplay={setDisplay}></AdminMenu>
           </div>
          {display === 'orders' && <AdminOrders></AdminOrders>}
          {display === 'create' && <CreateProduct></CreateProduct>}
          {display === 'products' && <AdminProductsList></AdminProductsList>}
          
      </div>
    )
  }
  
  export default AdminPage