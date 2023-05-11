
import mongoose, { Schema } from 'mongoose'
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [4 , 'Name must be at least 4 characters long'],
        maxlength: [16, 'Name must be less than 16 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [4 , 'Password must be at least 4 characters long']
    },
    role: { 
        type: String,
        enum:['admin', 'customer'],
        default: 'admin'
    },
    email: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    phone: {
        type: Number,
        required: false
    }
})

export default mongoose.model('User', userSchema);
