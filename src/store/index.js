import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import artistReducer from './reducers/artistReducer'
import userReducer from './reducers/userReducer'
import { favoriteReducer } from './reducers/favoriteReducer'
import songsReducer from './reducers/songsReducer'

const reducers = combineReducers({
  userReducer,
  songsReducer,
  favoriteReducer,
  artistReducer,
  songsReducer
})
const store = createStore(reducers, applyMiddleware(thunk))


export default store