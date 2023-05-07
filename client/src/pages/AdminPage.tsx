import CreateProduct from "../components/CreateProduct";
import EditProducts from "../components/EditProducts";
import {useEffect, useState} from "react";

function AdminPage() {
    const [count, setCount] = useState();

    return (
      <div>
          <CreateProduct></CreateProduct>
          <EditProducts></EditProducts>
      </div>
    )
  }
  
  export default AdminPage