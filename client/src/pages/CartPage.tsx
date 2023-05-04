import { Grid, Card, Typography } from "@mui/material"
import CartProduct from "../components/CartProduct"
import CartComponent from "../components/CartComponent"
import '../styles/cart.css'
import { useState, useEffect } from "react"

function CartPage() {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [changedCart, setChangedCart] = useState<boolean>(false)
  const items = [{ name: "item1", image: 'https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg', price: 199 },
  { name: "item2", image: 'https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg', price: 299 },
  { name: "item3", image: 'https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg', price: 399 }
  ]
  useEffect(() => {
    setTotalPrice(0)
    items?.map((item)=>{
      setTotalPrice((totalPrice) => totalPrice + item.price)
    })
  },[changedCart])

  return (
    <div>
      <Grid container id={'grid_container_shop'} gap={10} spacing={1}>
        <Grid item xs={6} md={6}>
          <Typography typography={'h4'} className="cart_page_text">Your Cart</Typography>
          {items.map((item) =>
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