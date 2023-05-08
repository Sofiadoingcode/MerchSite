
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    size: string;
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
    address: Address;
}

type Order = {
    id: string;
    orderTime: () => number;
    totalprice: number;
    address: Address;
    customer: Customer;
    productlines: [];
}

type Context = {
    products: Product[];
};


type Args = {
    id: string;
    input: Product;
    orderInput: Order;
};

export type {Product, Order, Context, Args};