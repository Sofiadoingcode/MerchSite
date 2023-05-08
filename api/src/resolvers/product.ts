import CategoryModel from "../models/categoryModel";
import { Category, Product } from "../types";

export default {
    category: (parent:Product, _args:never) => parent.category,
}