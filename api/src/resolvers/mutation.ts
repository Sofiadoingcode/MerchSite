import { Args } from "../types";
import Product from "../models/productModel";

export default{
    createProduct: async (_parent:never, { input }:Args) => {
          const newProduct = new Product(input);
          await newProduct.save();
          return newProduct;
      },
}