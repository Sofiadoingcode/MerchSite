import DeleteProduct from "../components/AdminPage/DeleteProduct"
import CategoryCard from "../components/CategoryCard"
import CreateProduct from "../components/CreateProduct"
import {useCartDispatchContext } from "../contexts/CartContext"

function HomePage() {
  const dispatch = useCartDispatchContext()

    return (
      <div>
        <CreateProduct/>
        <button onClick={()=> {
            dispatch({
              type: 'added',
              item: {id: '1', name: "item1", description: "Det her er et item", price: 199, category: 'Item', size: 'Rimelig stor' }
            });
        }}>
          ADD TO CART
        </button>
      </div>
    )
  }

  export default HomePage
