import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CreateProduct from "../components/AdminPage/CreateProduct"
import {useCartContext, useCartDispatchContext } from "../contexts/CartContext"
import {useUserContext} from "../contexts/UserContext";

import { Category } from "../types"
import { useState, useEffect } from "react"
import GetAllCategories from "../resolvers/queries/GqlGetAllCategories"
import { useQuery } from "@apollo/client"

function HomePage() {
  const dispatch = useCartDispatchContext()
  const [categories, setCategories] = useState<Category[]>([])
  const { loading, error, data } = useQuery(GetAllCategories, {onCompleted: (data)=> {setCategories(data.categories)}});

  const user = useUserContext()



    return (
      <div>
        <CreateProduct/>
        
      </div>
    )
  }

  export default HomePage
