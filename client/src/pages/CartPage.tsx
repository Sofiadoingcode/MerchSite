import { Grid, Card, Typography } from "@mui/material"
import CartProduct from "../components/CartPage/CartProduct"
import CartComponent from "../components/CartPage/CartOverview"
import '../styles/cart.css'
import { useState, useEffect } from "react"
import { useCartContext } from "../contexts/CartContext"

function CartPage() {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [changedCart, setChangedCart] = useState<boolean>(false)
  const cart = useCartContext()

  useEffect(() => {
    setTotalPrice(0)
    cart?.map((item)=>{
      setTotalPrice((totalPrice) => totalPrice + item.lineprice)
    })
  },[changedCart])

  return (
    <div>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        <Grid item xs={6} md={6}>
          <Typography typography={'h4'} className="cart_page_text">Your Cart</Typography>
          {cart.map((item) =>
              <CartProduct item={item} />
          )}
        </Grid>
        <Grid item xs={6} md={3}>
          <CartComponent totalPrice={totalPrice}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default CartPage