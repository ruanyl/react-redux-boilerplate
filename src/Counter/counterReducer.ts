import { createReducer } from 'reducer-tools'

import { Counter } from './CounterState'
import { ActionTypes } from '../actionTypes'

const increaseReducer = (s: any) => {
  const total = Counter.get('total')(s)
  return Counter.set('total', total + 1)(s)
}

const decreaseReducer = (s: any) => {
  const total = Counter.get('total')(s)
  return Counter.set('total', total - 1)(s)
}

export const counterReducer = createReducer(Counter.create(), {
  [ActionTypes.COUNTER.INCREMENTAL]: increaseReducer,
  [ActionTypes.COUNTER.DECREMENTAL]: decreaseReducer,
})

export const increase = () => ({ type: ActionTypes.COUNTER.INCREMENTAL })
export const decrease = () => ({ type: ActionTypes.COUNTER.DECREMENTAL })
