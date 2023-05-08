import mongoose from 'mongoose'
import Category from './categoryModel';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Category.schema,
        required: true
    },
    size: {
        type: [String],
        default: ['Small', 'Medium', 'Large'],
        required: false
    },
    image: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;