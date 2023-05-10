import { Address } from "../../types"

function CreateAddress(props: {address: Address , setAddress:React.Dispatch<React.SetStateAction<Address>>}) {
    
    return (
        <div>
            
                <p>Street Address</p>
                <input type='text' style={{margin: 5}} required placeholder='Street Address' value={props.address?.streetAddress}
                       onChange={(evt) => {
                           props.setAddress({...props.address, streetAddress: evt.target.value})
                       }}></input>
                <p>City</p>
                <input type='text' style={{margin: 5}} required placeholder='City' value={props.address?.city}
                       onChange={(evt) => {
                           props.setAddress({...props.address, city: evt.target.value})
                       }}></input>
                <p>ZipCode</p>
                <input type='text' style={{margin: 5}} required placeholder='Zipcode' value={props.address?.postalCode}
                       onChange={(evt) => {
                        props.setAddress({...props.address, postalCode: evt.target.value})
                       }}></input>
                <p>Country</p>
                <input type='text' style={{margin: 5}} required placeholder='Country' value={props.address?.country}
                       onChange={(evt) => {
                        props.setAddress({...props.address, country: evt.target.value})
                       }}></input>   
        </div>
    )
}

export default CreateAddress