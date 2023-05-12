import { Address } from "../../types"
import "../../styles/checkoutpage.css"

function CreateAddress(props: {address: Address , setAddress:React.Dispatch<React.SetStateAction<Address>>}) {
    
    return (
        <div>
            <div>
                <p>Street Address</p>
                <input type='text' style={{margin: 5}} required placeholder='Street Address' value={props.address?.streetAddress} className="inputfield"
                       onChange={(evt) => {
                           props.setAddress({...props.address, streetAddress: evt.target.value})
                       }}></input>
                <p>City</p>
                <input type='text' style={{margin: 5}} required placeholder='City' value={props.address?.city} className="inputfield"
                       onChange={(evt) => {
                           props.setAddress({...props.address, city: evt.target.value})
                       }}></input>
                <p>Postal Code</p>
                <input type='text' style={{margin: 5}} required placeholder='Postal Code' value={props.address?.postalCode} className="inputfield"
                       onChange={(evt) => {
                        props.setAddress({...props.address, postalCode: evt.target.value})
                       }}></input>
                <p>Country</p>
                <input type='text' style={{margin: 5}} required placeholder='Country' value={props.address?.country} className="inputfield"
                       onChange={(evt) => {
                        props.setAddress({...props.address, country: evt.target.value})
                       }}></input>   
            </div>
        </div>
    )
}

export default CreateAddress