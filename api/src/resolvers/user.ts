import { User } from "../types";

export default {
    product: async (parent:User, _args:never) => {
        return parent.customer;
    },
}