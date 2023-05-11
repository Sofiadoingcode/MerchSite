import mongoose, {Schema} from 'mongoose';
import ProductLine from './productLineModel'

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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
