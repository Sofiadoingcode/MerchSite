import mongoose, { Schema } from 'mongoose'
import ProductLine from './productLineModel'
import Customer from './customerModel'
import Address from './addressModel'

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
