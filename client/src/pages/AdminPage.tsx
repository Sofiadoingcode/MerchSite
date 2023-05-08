import CreateProduct from "../components/AdminPage/CreateProduct";
import AdminProductsList from "../components/AdminPage/AdminProductsList";
import {useEffect, useState} from "react";

function AdminPage() {
    const [count, setCount] = useState();

    return (
      <div>
          <CreateProduct></CreateProduct>
          <AdminProductsList></AdminProductsList>
      </div>
    )
  }
  
  export default AdminPage