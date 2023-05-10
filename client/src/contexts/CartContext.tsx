import { createContext, useReducer, useContext } from 'react';
import { CartActions, Product, ProductLine, ProductLineWithProduct } from '../types';

    const CartContext = createContext<ProductLineWithProduct[] | undefined>(undefined);
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

    const initialCart : ProductLineWithProduct[] = []

    function cartReducer(cart:ProductLineWithProduct[], action:CartActions) {
        switch (action.type) {
          case 'added': {
            return [...cart, {
              lineprice: action.item.lineprice,
              amount: action.item.amount,
              size: action.item.size,
              product: action.item.product,
              
            }];
          }
          case 'removed': {
            return cart.filter(i => i.product !== action.item.product && i.size !== action.item.size);
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