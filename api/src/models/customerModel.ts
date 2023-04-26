const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
});

export default productSchema;