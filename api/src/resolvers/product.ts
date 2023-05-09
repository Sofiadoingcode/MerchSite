import CategoryModel from "../models/categoryModel";
import { Category, Product } from "../types";

export default {
    category: async (parent:Product, _args:never)  =>  await CategoryModel.findById(parent.categoryId)
}