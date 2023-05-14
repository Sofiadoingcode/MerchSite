import '../../styles/checkoutpage.css'
import {NavLink} from 'react-router-dom';
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import {Order} from "../../types";

function PopUp(props: { text: String, order: Order, setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>, children: JSX.Element | JSX.Element[]; }) {

    return (
        <div>
            <div className="popup-container">
                <div className="popup-body">
                    <h2>{props.text}</h2>
                    {props.children}
                    <table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        {props.order.productLines.map((productLine) => <tr>
                                <td>{productLine.productId}</td>
                                <td>{productLine.size}</td>
                                <td>{productLine.amount}</td>
                                <td>{}</td>

                            </tr>
                        )}
                    </table>
                    <Button onClick={() => props.setOpenPopUp(false)}>Close</Button>

                </div>
            </div>

        </div>

    )
}

export default PopUp