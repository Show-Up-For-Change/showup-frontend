import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import actionReducer from './actions'
import leaderReducer from './leaders'
import userReducer from './user'

const reducer = combineReducers({
  actions: actionReducer,
  leaders: leaderReducer,
  user: userReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store;
