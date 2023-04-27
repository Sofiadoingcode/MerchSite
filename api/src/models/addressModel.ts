import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    postalCode: {
        type: String, 
        required: true
    }, 
    streetAddress: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    country: {
        type: String, 
        required: true
    },

})


const Address = mongoose.model('Address', addressSchema);

export default Address;