import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;