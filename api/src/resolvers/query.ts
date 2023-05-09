import mongoose from "mongoose";
import { Args, Context } from "../types";
import Product from "../models/productModel";
import Category from "../models/categoryModel";

export default {
    products: async ()=> await Product.find({}),
    product: async (_parent: never, {id}: Args, {products}: Context) => {
        const product = await Product.findById(id);
        return product;
    },
    categories: async () => await Category.find({}),
}

/*     categories: async ()=> { let newPerson = new Category({id: new mongoose.Types.ObjectId(), name: 'cat1', products:['6451b436944479f28258993e'] });
    await newPerson.save();
    let arr = []
    arr.push(newPerson)
    let newPerso = new Category({id: new mongoose.Types.ObjectId(), name: 'cat2', products:['6451b436944479f28258993e'] });
    await newPerso.save();
    arr.push(newPerso)
    return arr;*/