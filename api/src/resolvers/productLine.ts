import { ProductLine } from "../types";

export default {
     product: async (parent:ProductLine, _args:never) => {
        return parent.product
     },



}