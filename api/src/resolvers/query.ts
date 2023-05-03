import { Mongoose } from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";

export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        console.log (id)
        const product = await Product.findById(id);
        console.log(product)
        return product;
    }
}