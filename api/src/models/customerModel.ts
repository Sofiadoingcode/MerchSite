import mongoose, { Schema } from 'mongoose';
import Address from './addressModel';

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: Address.schema,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;