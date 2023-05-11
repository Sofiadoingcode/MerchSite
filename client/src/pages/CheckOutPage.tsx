import GqlCreateOrder from "../resolvers/mutations/GqlCreateOrder"
import {useState} from "react"
import {useMutation} from "@apollo/client"
import CreateAddress from "../components/CheckOutPage/CreateAddress"
import ProductLineSummary from "../components/CheckOutPage/ProductLineSummary"
import {Address, Order, ProductLine} from "../types"
import {useCartContext, useCartDispatchContext} from "../contexts/CartContext"
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import PopUp from "../components/CheckOutPage/PopUp"
import '../styles/productpage.css'
import {useUserContext} from "../contexts/UserContext";


function CheckOutPage() {
    const [order, setOrder] = useState<Order>(Object)
    const [address, setAddress] = useState<Address>(Object)
    const [openPopUp, setOpenPopUp] = useState(false);
    const cart = useCartContext();
    const dispatch = useCartDispatchContext();
    const userId = useUserContext().id;
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateOrder, {})

    let totalPrice: number = 0;
    useCartContext()?.map((item) => totalPrice += item.lineprice)


    let list: ProductLine[] = [];
    cart?.map((productLineWP) => {
            let productIdWP = productLineWP.product.id
            let newProductLine: ProductLine;
            newProductLine = {
                linePrice: productLineWP.lineprice,
                amount: productLineWP.amount,
                productId: productIdWP,
                size: productLineWP.size
            }
            list.push(newProductLine);
        }
    )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleSubmit = () => {

        order.totalPrice = totalPrice;
        order.userId = userId;
        order.address = address;


        order.productLines = list;
        mutateFunction({
            variables: {
                orderInput: order
            }
        })
        dispatch({type: 'reset'});
        setOpenPopUp(true)
    }

    return (
        <div>

            <Grid style={{backgroundColor: '#cbecf2'}} container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <Card>
                        <h2>Delivery Address</h2>
                        <CreateAddress address={address} setAddress={setAddress}/>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <Grid className={"infoGrid container"} container rowSpacing={1}
                              columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <Grid item xs={9}>
                                <h3>ORDER SUMMARY</h3>
                            </Grid>

                            <Grid item xs={12}>
                                {cart.map((productLine) => <ProductLineSummary productLine={productLine}/>)}
                            </Grid>
                            <Grid item xs={5}>
                                <Typography typography={'h4'} style={{marginTop: '3rem'}}>Total Price:</Typography>
                                <Typography typography={'h5'} style={{marginBottom: '3rem'}}>{totalPrice} €</Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Button style={{height: '40px', width: '200px'}} variant="contained"
                                        onClick={handleSubmit}>Pay</Button>
                                {openPopUp ? <PopUp text="Thank you for your purchase" setOpenPopUp={setOpenPopUp}
                                                    reroute={"/"}/> : null}
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckOutPage