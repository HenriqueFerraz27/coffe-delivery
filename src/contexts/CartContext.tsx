import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { NewOrderData } from '../schemas/newOrder'
import { useNavigate } from 'react-router-dom'

interface CartContextData {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  removeItem: (itemId: Item['id']) => void
  checkout: (order: NewOrderData) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const cartStateInitial = {
    cart: [],
    orders: [],
  }

  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartStateInitial,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

      return storedStateAsJSON
        ? JSON.parse(storedStateAsJSON)
        : cartStateInitial
    }
  )

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0',
      JSON.stringify(cartState)
    )
  }, [cartState])

  const navigate = useNavigate()

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

  const checkout = (order: NewOrderData) => {
    dispatch(checkoutCartAction(order, navigate))
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
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
