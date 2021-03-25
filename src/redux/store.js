import {createStore, applyMiddleware} from 'redux'

import logger from 'redux-logger'

import rootReducer from './root.reducers'

const middleware =[logger];

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store