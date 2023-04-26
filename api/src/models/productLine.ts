import mongoose, { Schema } from 'mongoose';

const ProductLineSchema = new mongoose.Schema({
    linePrice: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    product: {
        type: Product,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
});

const ProductLineModel = mongoose.model('Product', ProductLineSchema);

module.exports = ProductLineModel;
