import { useContext } from 'react'
import { CartItemsContext } from '../contexts/CartItemsContext'

export const useCartItems = () => {
  const context = useContext(CartItemsContext)
  if (!context) {
    throw new Error('useCartItems must be used within a TasksContextProvider')
  }
  return context
}
