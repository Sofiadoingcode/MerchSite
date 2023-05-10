type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: string[];
    image: string;
}

type User = {
    id: string;
    username: string;
    password: string;
    role: string
    customer: Customer;
}

type Customer = {
    email: string;
    name: string;
    phone: string;
}

type Category = {
    id: string;
    name: string;
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

type AddUser = {
    type: 'added';
    user: User;
};

type RemoveUser = {
    type: 'removed';
    user: User;
};

type UserActions = AddUser | RemoveUser;


export type { Product, Category, DropdownItems, CartActions, User, Customer, UserActions }