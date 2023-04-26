import mongoose, { Schema } from 'mongoose';

const Product = require('productModel.')


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

export default ProductLineSchema;
