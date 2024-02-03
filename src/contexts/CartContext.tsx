import { ReactNode, createContext, useReducer } from 'react'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CartContextData {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  removeItem: (itemId: Item['id']) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
  })

  const { cart, orders } = cartState

  const addItem = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const decrementItemQuantity = (itemId: Item['id']) => {
    dispatch(decrementItemQuantityAction(itemId))
  }

  const incrementItemQuantity = (itemId: Item['id']) => {
    dispatch(incrementItemQuantityAction(itemId))
  }

  const removeItem = (itemId: Item['id']) => {
    dispatch(removeItemAction(itemId))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
