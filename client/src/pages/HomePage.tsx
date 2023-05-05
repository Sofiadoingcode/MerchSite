import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CategoryCard from "../components/CategoryCard"
import CreateProduct from "../components/CreateProduct"
import EditProduct from "../components/AdminPage/EditProduct";
import {useState} from "react";

function HomePage() {
    const [input, setInput] = useState({
        "id": "64551ca6f0aebfa91eec33f7",
        "name": "Dragemand",
        "description": "Wow, flammer!",
        "price": 234234,
        "category": "Beast",
        "size": "PlanetSized"
    });
    
  
    return (
      <div>
        <h1>HOMEPAGE</h1>
          <EditProduct  product={input}/>
      </div>
    )
  }
  
  export default HomePage