import Address from "../models/addressModel";
import User from "../models/userModel";
import { Customer} from "../types";

export default {
     address: async (parent:Customer, _args:never) => {
         const address = await Address.findById(parent.addressId);
         return address
     },

}