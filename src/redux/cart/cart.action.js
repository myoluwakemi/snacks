import { items } from '../../components/Data'
import {CartActionTypes} from '../cart/cart.type'

export const ToggleCartHidden =()=>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
export const addItem = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})