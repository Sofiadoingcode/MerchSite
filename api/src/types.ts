
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
    products: Product[];
}

type Context = {
    products: Product[];
};


type Args = {
    id: string;
    input: Product;
};

export type {Product, Category, Context, Args};