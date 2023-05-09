import GqlCreateOrder from "../resolvers/mutations/GqlCreateOrder"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import CreateAddress from "../components/CheckOutPage/CreateAddress"
import { Address } from "../types"

function CheckOutPage() {
  const [order, setOrder] = useState({})
  const [address, setAddress] = useState<Address>({})


  const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateOrder, {
  })


  
    return (
      <div>
        <CreateAddress address={address} setAddress={setAddress}/>
      </div>
    )
}
  
  export default CheckOutPage