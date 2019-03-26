import { call, all } from 'redux-saga/effects'

import { counterSagas } from './Counter/CounterSagas'

export const sagas = [
  counterSagas,
]

// restart a saga if there are errors
export function* safeFork(saga: any, ...args: any): any {
  try {
    yield call(saga, ...args)
  } catch (err) {
    console.error(`Uncaught error in ${saga.name}`)
    console.error(err)
    yield call(safeFork, saga, ...args)
  }
}

export default function* rootSagas() {
  yield all(sagas.map(safeFork))
}
