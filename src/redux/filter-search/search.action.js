import {SearchActionTypes} from './search.type'

export const SetSearchField = (text)=>({
    type: SearchActionTypes.CHANGE_SEARCHFIELD,
    payload: text
})