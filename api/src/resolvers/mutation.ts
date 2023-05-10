
import {Args, CategoryArgs} from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";



export default {
    createProduct: async (_parent: never, {input}: Args) => {
        const newProduct = new Product(input);
        await newProduct.save();
        return newProduct;
    },

    deleteProduct: async (_parent: never, {id}: Args) => {
        const result = await Product.findByIdAndDelete(id);
        return result ? true : false;
    },
    editProduct: async (_parent: never, {input}: Args) => {
        const {id, ...updates} = input;
        const updatedProduct = await Product.findByIdAndUpdate(id, updates);
        return updatedProduct;
    },
    createCategory: async (_parent: never, {input}: CategoryArgs) => {
        const newCategory = new Category(input);
        await newCategory.save();
        return newCategory;
    },
    login: async (_parent: never, {userInput}: Args) => {
        const user = await UserModel.findOne({username: userInput.username}).exec();
        console.log("ITS MEEEEEEEEEEEE")
        console.log(user)
        if (!user) throw new Error('User not found');

        const validPassword = await user.password === userInput.password;
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({username: user}, process.env.JWT_SECRET);

        return {user: user, token:token}
    }
}