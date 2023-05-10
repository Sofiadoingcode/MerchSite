type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: string[];
    image: string;
    ratingAvg: number;
}

type Category = {
    id: string;
    name: string;
}

type Review = {
    id: string;
    title: string;
    text: string;
    rating: number;
    userId: string;
    productId: string;
}

type DropdownItems = {
    items: Category[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
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
export type { Product, Category, Review, DropdownItems, CartActions }