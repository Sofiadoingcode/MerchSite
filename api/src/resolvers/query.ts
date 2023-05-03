import { Mongoose } from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";

export default {
    products: async ()=> await Product.find({}),
}