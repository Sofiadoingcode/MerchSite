import { Customer } from "../types";

export default {
     address: async (parent:Customer, _args:never) => {
        return parent.address
     },



}