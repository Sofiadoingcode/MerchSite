import mongoose from 'mongoose';

import Product from './productModel';

const productLineSchema = new mongoose.Schema({
    linePrice: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    product: {
        type: Product.schema,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
});

const ProductLine = mongoose.model('ProductLine', productLineSchema);


export default ProductLine;
