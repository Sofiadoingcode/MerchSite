
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: string[];
    image: string;
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
    productId: string;
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

type Context = {
    products: Product[];
};

type Args = {
    id: string;
    input: Product;
    userInput: User;
    orderInput: Order;
};

type CategoryArgs = {
    id: string;
    input: Category;
};

export type {Product, Order, Customer, Address, ProductLine, Category, Context, CategoryArgs, Args};

