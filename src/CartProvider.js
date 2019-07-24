import React, { createContext, useReducer } from 'react'

import { actions } from './actions'

const initialState = {
  items: {},
  itemIds: new Set([]),
  lineItems: {},
  lineItemIds: new Set([]),
  wishlistItemIds: new Set([])
}

const reducer = (state = initialState, { type, payload }) => {
  let { lineItems, lineItemIds, wishlistItemIds } = state

  switch (type) {
    case actions.addItems: {
      const items = payload.reduce(
        (acc = {}, { id, ...rest }) => ({ ...acc, [id]: rest }),
        {}
      )

      const itemIds = new Set(Object.keys(items))
      return { ...state, itemIds, items }
    }

    case actions.addWishlistItem: {
      return { ...state, wishlistItemIds: wishlistItemIds.add(payload) }
    }

    case actions.removeWishlistItem: {
      wishlistItemIds.delete(payload)
      return { ...state, wishlistItemIds }
    }

    case actions.addLineItem: {
      const id = payload

      if (lineItems.hasOwnProperty(id)) {
        const item = lineItems[id]

        lineItems = {
          ...lineItems,
          [id]: { quantity: item.quantity + 1 }
        }
      } else {
        lineItems = {
          ...lineItems,
          [id]: { quantity: 1 }
        }
      }

      lineItemIds.add(id)
      return { ...state, lineItems, lineItemIds }
    }

    case actions.updateLineItem: {
      const { id, quantity } = payload

      if (lineItems.hasOwnProperty(id)) {
        lineItems = {
          ...lineItems,
          [id]: { quantity }
        }
      }

      return { ...state, lineItems, lineItemIds }
    }

    case actions.removeLineItem: {
      const id = payload

      if (lineItems.hasOwnProperty(id)) {
        delete lineItems[id]
      }

      lineItemIds.delete(id)
      return { ...state, lineItems, lineItemIds }
    }

    default: {
      return state
    }
  }
}

export const CartContext = createContext()

const CartProvider = ({ children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
)

export default CartProvider
