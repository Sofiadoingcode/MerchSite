import Address from "../models/addressModel"
import { Category, User } from "../types";

export default {

    address: async (parent: User, _args: never) => {
        return await Address.findById(parent.addressId)
    },

}