import {Args} from "../types";
import Product from "../models/productModel";
import jwt from "jsonwebtoken";

export default {
    createProduct: async (_parent: never, {input}: Args) => {
        const newProduct = new Product(input);
        await newProduct.save();
        return newProduct;
    },
    login: async (_parent: never, {input}: Args) => {
        if ('username' in input) {
            const token = jwt.sign({username: input.username,password: input.password}, process.env.JWT_SECRET);
            return {token}
        } else return null
    }
}