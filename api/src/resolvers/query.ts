import { Mongoose } from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";

export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    }
}