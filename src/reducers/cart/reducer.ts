import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import { NewOrderData } from '../../schemas/newOrder'

export interface Item {
  id: number
  quantity: number
}

export interface Order extends NewOrderData {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export const cartReducer = (state: CartState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, draft => {
        const itemAlreadyAdded = draft.cart.find(
          item => item.id === action.payload.item.id
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })
      break

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const itemToDecrement = draft.cart.find(
          item => item.id === action.payload.itemId
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })
      break

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, draft => {
        const itemToIncrement = draft.cart.find(
          item => item.id === action.payload.itemId
        )

        if (itemToIncrement?.id && itemToIncrement.quantity < 10) {
          itemToIncrement.quantity += 1
        }
      })
      break

    case ActionTypes.REMOVE_ITEM:
      return produce(state, draft => {
        const itemToRemoveId = draft.cart.findIndex(
          item => item.id === action.payload.itemId
        )
        draft.cart.splice(itemToRemoveId, 1)
      })
      break

    case ActionTypes.CHECKOUT_CART:
      return produce(state, draft => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
      break

    default:
      return state
  }
}
