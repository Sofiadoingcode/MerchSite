import mongoose from "mongoose";
import {Args, Context} from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import Order from "../models/orderModel";
import Review from "../models/reviewModel";
import Address from "../models/addressModel";


export default {
    products: async () => await Product.find({}),
    product: async (_parent: never, {id}: Args) => {
        const product = await Product.findById(id);
        return product;
    },

    categories: async () => await Category.find({}),
    orders: async (_parent: never, _args: never, {user}: Context) => {
        const userId = user.username._id
        const u = await UserModel.findById(userId)
        const userRole = u.role;
        if (userRole === "admin"){
        return {
          error: "You have no permission to perform this action",
        }}
        return await Order.find({})},
    ordersByUser: async (_parent: never, {id}: Args) => {
        const allOrders = await Order.find({userId: id});
        return allOrders;

    },

    reviewsByProduct: async (_parent: never, {id}: Args) => {

        const allReviews = await Review.find({});
        const reviews = allReviews.filter((rev) => rev.productId.toString() === id)
        return reviews
    },

    user: async (_parent: never, {id}: Args) => {
        const user = await UserModel.findById(id);
        return user;
    },

    productByCategory: async (_parent: never, {id}: Args) => {
        const allProducts = await Product.find({});
        const products = allProducts.filter((products) => products.categoryId.toString() === id)
        const product = products[Math.floor(Math.random() * products.length)];
        return product
    },

}
