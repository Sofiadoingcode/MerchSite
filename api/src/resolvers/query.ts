import mongoose from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";


export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    },

    categories: async () => await Category.find({}),

}
