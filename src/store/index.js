import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import actionReducer from '/actions'

const reducer = combineReducers({
  action: actionReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store;
