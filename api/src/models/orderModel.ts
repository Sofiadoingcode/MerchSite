import mongoose, { Schema } from 'mongoose';
import ProductLine from './productLineModel'
import Address from './addressModel'
import Customer from './customerModel'

const OrderSchema = new mongoose.Schema({
    orderTime: {
        type: Date,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: Address,
        required: true,
    },
    productLines: {
        type: [ProductLine],
        required: true,
    },
    customer: {
        type: Customer,
        required: true
    }
});

export default OrderSchema;
