export const actions = {
  addItems: 'ADD_ITEMS',
  addLineItem: 'ADD_LINE_ITEM',
  addWishlistItem: 'ADD_WISHLIST_ITEM',
  removeLineItem: 'REMOVE_LINE_ITEM',
  removeWishlistItem: 'REMOVE_WISHLIST_ITEM',
  updateLineItem: 'UPDATE_LINE_ITEM'
}

const create = type => payload => ({ payload, type })

export const addItems = create(actions.addItems)
export const addLineItem = create(actions.addLineItem)
export const addWishlistItem = create(actions.addWishlistItem)
export const removeLineItem = create(actions.removeLineItem)
export const removeWishlistItem = create(actions.removeWishlistItem)
export const updateLineItem = create(actions.updateLineItem)
