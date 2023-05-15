import { NavLink } from 'react-router-dom';
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";
function PopUp(props : {text: String, setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>, reroute: string }) {

    return (
        <div>
            <div className="popup-container">
                <div className="popup-body">
                    <h2>{props.text}</h2>
                    <NavLink to={props.reroute} >
                        <Button onClick={() => props.setOpenPopUp(false)}>Close</Button>
                    </NavLink>

                </div>
            </div>
        </div>

    )
}
export default PopUp