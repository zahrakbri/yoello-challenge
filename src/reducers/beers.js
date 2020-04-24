import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_WITH_FILTER_BEGIN,
  GET_DATA_WITH_FILTER_SUCCESS,
  GET_DATA_WITH_FILTER_FAILURE
} from '../actions/beers.js'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/cart'


const INIT = {
  beerList: [],
  loading: true,
  error: null,
  shoppingList: []
}

const beers = (state = INIT, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        beerList: action.payload,
      }

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beerList: [],
      }
    case GET_DATA_WITH_FILTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case GET_DATA_WITH_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        beerList: action.payload,
      }

    case GET_DATA_WITH_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beerList: [],
      }

    case ADD_TO_CART:
      return {
        ...state,
        shoppingList: [ ...state.shoppingList, action.payload ]
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        shoppingList: state.shoppingList.filter(beer => beer.id !== action.payload )
      }

    default:
      return state
  }
}
export default beers
