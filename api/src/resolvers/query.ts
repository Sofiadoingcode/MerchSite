import { Mongoose } from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";

export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    },
    login: async (_parent: never, {input}: Args) => {
        if ('username' in input) {
            const user = await UserModel.findOne({username: input.username}).exec();
            if (!user) throw new Error('User not found');

            const validPassword = await user.password === input.password;
            if (!validPassword) throw new Error('Invalid password');

            const token = jwt.sign({username: user}, process.env.JWT_SECRET);

            return {user: user, token:token}
        } else return null
    }
}