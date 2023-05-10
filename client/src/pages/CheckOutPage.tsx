import GqlCreateOrder from "../resolvers/mutations/GqlCreateOrder"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import CreateAddress from "../components/CheckOutPage/CreateAddress"
import { Address, Order, ProductLine } from "../types"
import { useCartContext } from "../contexts/CartContext"

function CheckOutPage() {
  const [order, setOrder] = useState<Order>(Object)
  const [address, setAddress] = useState<Address>(Object)
  
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateOrder, {
    })

    const handleSubmit = () => {
      setOrder({...order, totalPrice: 100})
      setOrder({...order, customerId: "1"})
      setOrder({...order, address: address})
      //setOrder({...order, productLines: useCartContext()})


      mutateFunction({
        variables: {
            orderInput: order
        }
    })

    }

    return (
      <div>
        <CreateAddress address={address} setAddress={setAddress}/>
        <button onClick={handleSubmit}>Confirm and Pay</button>      
      </div>
    )
}
  
  export default CheckOutPage