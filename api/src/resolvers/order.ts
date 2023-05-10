import Customer from "../models/customerModel";
import {Order} from "../types";
import customer from "./customer";

export default {
    productLines: async (parent: Order, _args: never) => {
        return parent.productLines
    },

    address: async (parent: Order, _args: never) => {
        return parent.address
    },

    customer: async (parent: Order, _args: never) => {
        const customer = await Customer.findById(parent.customerId);
        return customer
    },


}