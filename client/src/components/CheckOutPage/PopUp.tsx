import '../../styles/checkoutpage.css'
import { NavLink } from 'react-router-dom';

function PopUp(props : {text: String, setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>, reroute: string }) {
    
    return (
        <div>
            <div className="popup-container">     
                <div className="popup-body">      
                    <h2>{props.text}</h2>   
                    <NavLink to={props.reroute} >
                        <button onClick={() => props.setOpenPopUp(false)}>Close</button>  
                    </NavLink>
   
                </div>   
             </div>

        </div>
           
    )
}

export default PopUp