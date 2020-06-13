import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import actionReducer from '/actions'
import leaderReducer from '/leaders'

const reducer = combineReducers({
  actions: actionReducer,
  leaders: leaderReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store;
