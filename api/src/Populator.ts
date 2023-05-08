import Product from "./models/productModel";
import mongoose from "mongoose";
import User from "./models/userModel";
const Populator = async () => {
    await User.create({username: 'admin', password: 'admin', role: 'admin'});

}

export default Populator;

