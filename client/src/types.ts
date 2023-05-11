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
    postalCode: string;
    streetAddress: string;
}

type Order = {
    id: string;
    totalPrice: number;
    address: Address;
    customerId: string;
    productLines: ProductLine[];
}

type ProductLine = {
    linePrice: number;
    amount: number;
    size: string;
    productId: string;
}

type ProductLineWithProduct = {
    lineprice: number;
    amount: number;
    size: string;
    product: Product;
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
    item: ProductLineWithProduct;
};

type RemoveFromCart = {
    type: 'removed';
    item: ProductLineWithProduct;
};

type ResetCart = {
    type: 'reset';
};


type CartActions = AddtoCart | RemoveFromCart | ResetCart;
export type { Product, Category, DropdownItems, CartActions, Address, Order, ProductLine, ProductLineWithProduct }