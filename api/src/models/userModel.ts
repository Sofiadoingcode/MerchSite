
import mongoose, { Schema } from 'mongoose'
import CustomerModel from "./customerModel";
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
    email: {
        type: String,
        required: false,
    }
    ,
    role: { 
        type: String,
        enum:['admin', 'user'],
        default: 'admin'
    },


})

export default mongoose.model('User', userSchema);
