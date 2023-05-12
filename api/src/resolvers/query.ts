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
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    },

    categories: async () => await Category.find({}),
    orders: async () => await Order.find({}),
    ordersByUser: async (_parent:never, {id}: Args) => {
        const allOrders = await Order.find({});
       const orders = allOrders.filter((ord)=> ord.userId.toString() === id)
       return orders
    },

    reviewsByProduct: async (_parent: never, {id}: Args) => {
       const allReviews = await Review.find({});
       const reviews = allReviews.filter((rev)=> rev.productId.toString() === id)
       return reviews
    },

    user: async (_parent: never, {id}: Args) => {
        const user = await UserModel.findById(id);
        return user;
    },

}
