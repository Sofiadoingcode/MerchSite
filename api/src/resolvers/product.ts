import CategoryModel from "../models/categoryModel";
import Review from "../models/reviewModel";
import { Category, Product } from "../types";

export default {
    category: async (parent:Product, _args:never)  =>  await CategoryModel.findById(parent.categoryId),
    ratingAvg: async (parent:Product, _args:never) => {
        const allReviews = await Review.find({});
        const reviews = allReviews.filter((rev)=> rev.productId.toString() === parent.id)
        let result = 0;
        if(reviews.length > 0){
            reviews.map((rev)=> result+=rev.rating)
            result = result/reviews.length
        }
        return result
    } 
}