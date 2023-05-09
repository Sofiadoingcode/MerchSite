import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CreateProduct from "../components/AdminPage/CreateProduct"
import {useCartDispatchContext } from "../contexts/CartContext"

import { Category } from "../types"
import { useState } from "react"
import GetAllCategories from "../resolvers/queries/GqlGetAllCategories"
import { useQuery } from "@apollo/client"

function HomePage() {
  const dispatch = useCartDispatchContext()
  const [categories, setCategories] = useState<Category[]>([])
  const { loading, error, data } = useQuery(GetAllCategories, {onCompleted: (data)=> {setCategories(data.categories)}});


    return (
      <div>
        <CreateProduct/>
        
      </div>
    )
  }

  export default HomePage
