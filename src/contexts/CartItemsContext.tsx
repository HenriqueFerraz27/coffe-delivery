import { ReactNode, createContext, useEffect, useState } from 'react'
import { CartItem } from '../@types/cart-items'

interface CartItemsContextData {
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

export const CartItemsContext = createContext({} as CartItemsContextData)

interface CartItemsContextProviderProps {
  children: ReactNode
}

export const CartItemsContextProvider = ({
  children,
}: CartItemsContextProviderProps) => {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:CartItems-items-state-1.0.0'
  )

  const [cartItems, setCartItems] = useState<CartItem[]>(
    storedStateAsJSON
      ? JSON.parse(storedStateAsJSON)
      : [
          {
            id: 1,
            sourceImg: '/coffees/expresso-tradicional.png',
            variants: ['Tradicional'],
            name: 'Expresso Tradicional',
            description:
              'O tradicional café feito com água quente e grãos moídos',
            value: 9.9,
            quantity: 2,
          },
        ]
  )

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:CartItems-items-state-1.0.0',
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  )
}
