import { Order } from "../types";

export default {
     productLines: async (parent:Order, _args:never) => {
         console.log(parent.productLines)
        return parent.productLines
     },

     address: async (parent:Order, _args:never) => {
      console.log(parent.address)
      return parent.address
   },

   customer: async (parent:Order, _args:never) => {
      console.log(parent.customer)
      return parent.customer
   },


}