type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    size: string;
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
export type { Product, CartActions }