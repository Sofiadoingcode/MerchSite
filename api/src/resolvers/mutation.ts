import { Args } from "../types";
import Product from "../models/productModel";

export default{
    createProduct: async (_parent:never, { input }:Args) => {
          const newProduct = new Product(input);
          await newProduct.save();
          return newProduct;
      },

      deleteProduct: async (_parent:never, { id }:Args) => {
        const result = await Product.findByIdAndDelete(id);
        return result ? true : false;
      },
}