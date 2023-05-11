import { createContext, useReducer, useContext, useEffect } from 'react';
import { CartActions, Product, ProductLine, ProductLineWithProduct } from '../types';
import { empty } from '@apollo/client';

    const CartContext = createContext<ProductLineWithProduct[] | undefined>(undefined);
    const CartDispatchContext = createContext<React.Dispatch<CartActions> | undefined>(undefined);

export function CartContextProvider({children}: { children: JSX.Element }) {
    const [cart, dispatch] = useReducer(
        cartReducer,
        initialCart
    );

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

  const getInitialState = () => {
    let cartString = localStorage.getItem('cart');
    if(cartString != null) {
      return JSON.parse(cartString)
    } else {
      return []
    }
  }

    const initialCart : ProductLineWithProduct[] = getInitialState();
    

    function cartReducer(cart:ProductLineWithProduct[], action:CartActions) {
        switch (action.type) {
          case 'added': {
            cart = [...cart, {
              lineprice: action.item.lineprice,
              amount: action.item.amount,
              size: action.item.size,
              product: action.item.product,
            }]
            localStorage.setItem("cart", JSON.stringify(cart))
            return cart ;
          }
          case 'removed': {
            cart = cart.filter(i => i.product !== action.item.product && i.size !== action.item.size)
            localStorage.setItem("cart", JSON.stringify(cart))
            return cart;
          }
          case 'reset': {
            cart = initialCart;
            localStorage.setItem("cart", JSON.stringify(cart))
            return cart;
          }
        }
    }


    
export function useCartContext() {
    let context = useContext(CartContext)
    if (context === undefined) {
        throw Error('Used outside of context')
    }
    return context
}

export function useCartDispatchContext() {
    let context = useContext(CartDispatchContext)
    if (context === undefined) {
        throw Error('Used outside of context')
    }
    return context
}
