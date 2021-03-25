import {combineReducers} from "redux"

import SearchReducer from  './filter-search/search.reducers'

import CartReducer from './cart/cart.reducer'


export default combineReducers({
    search: SearchReducer,
    cart: CartReducer
})