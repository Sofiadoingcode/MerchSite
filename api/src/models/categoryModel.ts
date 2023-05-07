import mongoose, { Schema } from 'mongoose'
import Product from './productModel';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;