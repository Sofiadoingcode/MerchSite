
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    size: string[];
    image: string;
    ratingAvg: number;
}

type Category = {
    id: string;
    name: string;
}

type User = {
    username: string;
    password: string;
    category: string;
    size: string;
}

type ProductLine = {
    id: string;
    lineprice: number;
    amount: number;
    size: string;
    product: Product;
}

type Address = {
    id: string;
    postalcode: string;
    streetaddress: string;
    city: string;
    country: string;
}

type Customer = {
    id: string;
    name: string;
    email: string;
    phone: number;
    addressId: string;
}

type Order = {
    id: string;
    orderTime: () => number;
    totalPrice: number;
    address: Address;
    customerId: string;
    productLines: [ProductLine];
}

type Review = {
    id: string;
    title: string;
    text: string;
    rating: number;
    userId: string;
    productId: string;
}

type Context = {
    products: Product[];
};

type Args = {
    id: string;
    input: Product;
    userInput: User;
    orderInput: Order;
    reviewInput: Review;
};

type CategoryArgs = {
    id: string;
    input: Category;
};

export type {Product, Order, Customer, Address, ProductLine, Category, Review, Context, CategoryArgs, Args};

