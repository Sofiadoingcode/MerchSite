import '../../styles/checkoutpage.css'
import {NavLink} from 'react-router-dom';
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
import {Order, OrderWithEverything} from "../../types";

function PopUp(props: { text: String, order: OrderWithEverything, setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>, children: JSX.Element | JSX.Element[]; }) {

    return (
        <div>
            <div className="popup-container">
                <div className="popup-body">
                    <h2>{props.text}</h2>
                    {props.children}



                    <Button onClick={() => props.setOpenPopUp(false)}>Close</Button>

                </div>

            </div>

        </div>

    )
}

export default PopUp