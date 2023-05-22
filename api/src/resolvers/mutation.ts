import {Args, CategoryArgs, Address} from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";
import Order from "../models/orderModel";
import Review from "../models/reviewModel";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import AddressModel from "../models/addressModel";
import { graphql } from "graphql";

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
        if (!user) throw new Error('User not found');

        const validPassword = user.password === userInput.password;
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({username: user}, process.env.JWT_SECRET);

        return {user: user, token: token}
    },


    createOrder: async (_parent:never, { orderInput }:Args) => {
          const newOrder = new Order(orderInput);
          await newOrder.save();
          return newOrder;

      },
      createReview: async (_parent:never, { reviewInput }:Args) => {
        const newReview = new Review(reviewInput);
        await newReview.save();
        return newReview;

    },

    createCustomerAccount: async (_parent: never, {userInput}: Args) => {
        userInput.role = 'customer';

        if (userInput.username) {
            const existingUser = await User.findOne({ username: userInput.username });

            if (existingUser) {
                throw new Error('Duplicate username');
            }
        }

        const newUser = new User(userInput);
        await newUser.save();
        return newUser;

    },

    createAddress: async (_parent: never, {addressInput}: Args) => {
        const newAddress = new AddressModel(addressInput);
        await newAddress.save();
        return newAddress;
    },

    addAddressToUser: async (_parent: never, {id, addressInput}: Args) => {
        const addresses: Address[] = await AddressModel.find({})
        let foundAddress = null;
        addresses.map((address) => {
            if(addressInput.streetAddress == address.streetAddress &&
                addressInput.city == address.city &&
                addressInput.postalCode == address.postalCode &&
                addressInput.country == address.country
                ) {
                    foundAddress = address;
            }
        })


        if(foundAddress == null) {
            const newAddress = new AddressModel(addressInput);
            await newAddress.save();
            const user = await User.findByIdAndUpdate(id, {addressId: newAddress.id});
            return user;
        } else {
            const user = await User.findByIdAndUpdate(id, {addressId: foundAddress.id});
            return user;
        }
    }
}
