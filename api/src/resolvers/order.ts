import {Order} from "../types";
import User from "../models/userModel";

export default {
    productLines: async (parent: Order, _args: never) => {
        return parent.productLines
    },

    address: async (parent: Order, _args: never) => {
        return parent.address
    },

    user: async (parent: Order, _args: never) => {
        return await User.findById(parent.userId)
    },


}