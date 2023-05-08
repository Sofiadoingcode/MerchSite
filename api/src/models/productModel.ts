import mongoose from 'mongoose'


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
        type: String,
        required: true
    },
    size: {
        type: [String],
        default: ['Small', 'Medium', 'Large'],
        required: false
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;