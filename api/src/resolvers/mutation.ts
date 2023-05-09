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
        console.log("Im editing")
        const {id, ...updates} = input;
        const updatedProduct = await Product.findByIdAndUpdate(id, updates);
        console.log(updatedProduct)
        console.log("Im done editing!")
        return updatedProduct;
    },
    createCategory: async (_parent: never, {input}: CategoryArgs) => {
        const newCategory = new Category(input);
        await newCategory.save();
        return newCategory;
    },

}