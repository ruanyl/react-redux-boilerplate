import { combineReducers } from 'redux-immutable'
import { T } from 'ramda'

import { Counter } from './Counter/CounterState'
import { counterReducer } from './Counter/counterReducer'

const rootReducer = combineReducers({
  [Counter.namespace]: counterReducer,
  __root: T,
})

export default rootReducer
