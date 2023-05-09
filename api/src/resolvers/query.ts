import mongoose from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    },

    categories: async () => await Category.find({}),


    login: async (_parent: never, {userInput}: Args) => {

            const user = await UserModel.findOne({username: userInput.username}).exec();
            if (!user) throw new Error('User not found');

            const validPassword = await user.password === userInput.password;
            // const validPassword = await bcrypt.compare(userInput.password, user.password)
            if (!validPassword) throw new Error('Invalid password');
            const token =  jwt.sign({username: user}, process.env.JWT_SECRET);
            return  {user: user, token:token}

    }
}
