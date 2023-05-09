import mongoose, { Schema } from 'mongoose'
import ProductLine from './productLineModel'
import Customer from './customerModel'
import Address from './addressModel';

const orderSchema = new mongoose.Schema({
    orderTime: {
        type: Schema.Types.Date,
		default: Date.now,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: Address.schema,
        required: true,
    },
    productLines: {
        type: [ProductLine.schema],
        required: true,
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
