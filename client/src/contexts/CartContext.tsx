import { createContext, useReducer, useContext } from 'react';
import { CartActions, Product } from '../types';

    const CartContext = createContext<Product[] | undefined>(undefined);
    const CartDispatchContext = createContext<React.Dispatch<CartActions> | undefined>(undefined);

export function CartContextProvider({ children }:{children:JSX.Element}) {
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

    const initialCart : Product[] = []

    function cartReducer(cart:Product[], action:CartActions) {
        switch (action.type) {
          case 'added': {
            return [...cart, {
              id: action.item.id,
              name: action.item.name,
              description: action.item.description,
              price: action.item.price,
              category: action.item.category,
              size: action.item.size,
              image: action.item.image
            }];
          }
          case 'removed': {
            return cart.filter(i => i.id !== action.item.id);
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