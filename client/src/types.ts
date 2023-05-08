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
type AddtoCart = {
    type: 'added';
    item: Product;
};

type RemoveFromCart = {
    type: 'removed';
    item: Product;
};
type CartActions = AddtoCart | RemoveFromCart;
export type { Product, Category, CartActions }