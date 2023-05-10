import Product from "../models/productModel";
import userModel from "../models/userModel";
import { Review } from "../types";

export default {
     user: async (parent:Review, _args:never) => {
        return await userModel.findById(parent.userId)
     },

     product: async (parent:Review, _args:never) => {
      return await Product.findById(parent.productId)
   },
}