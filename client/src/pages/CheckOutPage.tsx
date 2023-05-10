import GqlCreateOrder from "../resolvers/mutations/GqlCreateOrder"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import CreateAddress from "../components/CheckOutPage/CreateAddress"
import { Address, Order, ProductLine } from "../types"
import { useCartContext } from "../contexts/CartContext"

function CheckOutPage() {
  const [order, setOrder] = useState<Order>(Object)
  const [address, setAddress] = useState<Address>(Object)
  const cart = useCartContext();
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateOrder, {
    })

    let totalPrice: number = 0;
      useCartContext()?.map((item)=> totalPrice+=item.lineprice)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleSubmit = () => {

      order.totalPrice = totalPrice;
      //order.customerId = "1";
      order.address = address;

      let list : ProductLine[] = [];
      cart?.map((productLineWP) => {
        let productIdWP = productLineWP.product.id
        let newProductLine: ProductLine;
        newProductLine = {
          linePrice : productLineWP.lineprice,
          amount : productLineWP.amount,
          productId : productIdWP,
          size : productLineWP.size
        }

          list.push(newProductLine);
        }
      )

      order.productLines = list;



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
        <p>{totalPrice}</p>  
      </div>
    )
}
  
  export default CheckOutPage