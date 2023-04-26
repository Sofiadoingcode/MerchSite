import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    postalCode: String, 
    streetAddress: String,
    city: String,
    country: String,

})


const Address = mongoose.model('Car', addressSchema);

export default Address;