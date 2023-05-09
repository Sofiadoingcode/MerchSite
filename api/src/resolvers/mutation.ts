import {Args} from "../types";
import Product from "../models/productModel";
import Order from "../models/orderModel";

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

    createOrder: async (_parent:never, { orderInput }:Args) => {
        console.log("TEST1")
          const newOrder = new Order(orderInput);
          console.log("TEST2")
          await newOrder.save();
          console.log("TEST3")
          return newOrder;
        
      },

}