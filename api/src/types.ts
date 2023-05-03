
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    size: string;

}

type Context = {
    products: Product[];
};


type Args = {
    id: string;
    input: Product;
};

export type {Product, Context, Args};