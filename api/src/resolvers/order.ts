import { Order } from "../types";

export default {
     productLines: async (parent:Order, _args:never) => {
        return parent.productlines
     },

     address: async (parent:Order, _args:never) => {
        return parent.address
     },

     customer: async (parent:Order, _args:never) => {
        return parent.customer
     }

}