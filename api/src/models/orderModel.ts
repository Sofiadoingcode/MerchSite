import mongoose, { Schema } from 'mongoose';
import ProductLine from './productLine'
import Address from './Address'

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
});

export default OrderSchema;
