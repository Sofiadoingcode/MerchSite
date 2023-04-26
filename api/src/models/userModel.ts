const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [4 , 'Name must be at least 4 characters long'],
        maxlength: [16, 'Name must be less than 16 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [4 , 'Password must be at least 4 characters long'],
        maxlength: [20, 'Password must be less than 20 characters long']
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

    user: {
        type: CustomerModel.schema,
        required: false
    }


})

export default mongoose.model('User', userSchema);
