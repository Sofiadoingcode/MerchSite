import { Args, Context } from "../types";

export default {
    products: (_parent:never, _args:Args, {products}:Context) => products,
}