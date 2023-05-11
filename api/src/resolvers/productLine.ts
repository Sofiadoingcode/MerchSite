import Product from "../models/productModel";
import { ProductLine } from "../types";

export default {
     product: async (parent:ProductLine, _args:never) => {
      const product = await Product.findById(parent.productId);
      return product 
     },



}