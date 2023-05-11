type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: string[];
    image: string;
    ratingAvg: number;
}

type User = {
    id: string;
    username: string;
    password: string;
    role: string;
    email: string;
    name: string;
    phone: string;

}



type Address = {
    id: string;
    country: string;
    city: string;
    postalCode: string;
    streetAddress: string;
}

type Order = {
    id: string;
    totalPrice: number;
    address: Address;
    userId: string;
    productLines: ProductLine[];
}

type ProductLine = {
    linePrice: number;
    amount: number;
    size: string;
    productId: string;
}

type ProductLineWithProduct = {
    lineprice: number;
    amount: number;
    size: string;
    product: Product;
}

type Category = {
    id: string;
    name: string;
}

type Review = {
    id: string;
    title: string;
    text: string;
    rating: number;
    userId: string;
    productId: string;
}

type DropdownItems = {
    items: Category[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

type AddtoCart = {
    type: 'added';
    item: ProductLineWithProduct;
};

type RemoveFromCart = {
    type: 'removed';
    item: ProductLineWithProduct;
};


type AddUser = {
    type: 'added';
    user: User;
};

type RemoveUser = {
    type: 'removed';
    user: User;
};

type ResetCart = {
    type: 'reset';
};


type UserActions = AddUser | RemoveUser;

type CartActions = AddtoCart | RemoveFromCart | ResetCart;
export type { Product, Category, DropdownItems, Review, CartActions, User, UserActions, Address, Order, ProductLine, ProductLineWithProduct }





