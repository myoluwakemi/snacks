import {SearchActionTypes} from './search.type'

const INITIAL_STATE ={
    filteredObject: "",
}

const SearchReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case SearchActionTypes.CHANGE_SEARCHFIELD:
            return {
                ...state, filteredObject: action.payload
            }
            
        default:
            return state;
    }
}
export default SearchReducer;