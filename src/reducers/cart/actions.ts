import { NavigateFunction } from 'react-router-dom'
import { NewOrderData } from '../../schemas/newOrder'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: NewOrderData
        callback: NavigateFunction
      }
    }

export const addItemAction = (item: Item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export const decrementItemQuantityAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export const incrementItemQuantityAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export const removeItemAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: NewOrderData,
  callback: NavigateFunction
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
