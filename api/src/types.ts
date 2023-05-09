
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
}

type Context = {
    products: Product[];
};

type Args = {
    id: string;
    input: Product;
    userInput: User;
};

type CategoryArgs = {
    id: string;
    input: Category;
};

export type {Product, Category, Context, Args, CategoryArgs};