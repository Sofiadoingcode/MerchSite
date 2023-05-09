type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: string[];
    image: string;
}

type Address = {
    id: string;
    country: string;
    city: string;
    zipCode: string;
    streetAddress: string;
}

type Category = {
    id: string;
    name: string;
}

type DropdownItems = {
    items: Category[]
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
export type { Product, Category, DropdownItems, CartActions, Address }