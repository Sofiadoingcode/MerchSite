import '../../styles/checkoutpage.css'
import { NavLink } from 'react-router-dom';
import {Button, Card, CardMedia, Grid, TextField, Typography} from "@mui/material";

function PopUp(props : {text: String, setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>}) {
    
    return (
        <div>
            <div className="popup-container">     
                <div className="popup-body">
                        <Button onClick={() => props.setOpenPopUp(false)}>Close</Button>  

                </div>   
             </div>

        </div>
           
    )
}

export default PopUp