import {Args, CategoryArgs} from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";

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

}