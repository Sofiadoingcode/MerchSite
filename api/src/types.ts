
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    size: string;
}

type User = {
    username: string;
    password: string;
}

type Context = {
    products: Product[];
};


type Args = {
    id: string;
    input: Product | User;
};

export type {Product, Context, Args};