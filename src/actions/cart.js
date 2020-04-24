export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = beer => ({
  type: ADD_TO_CART,
  payload: beer
})

export const removeFromCart = beerID => ({
  type: REMOVE_FROM_CART,
  payload: beerID
})