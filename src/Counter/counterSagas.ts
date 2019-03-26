import { call, takeEvery, all } from 'redux-saga/effects'
import { ActionTypes } from '../actionTypes'

export function* increaseSideEffects() {
  yield call(() => console.log('increase!'))
}

export function* decreaseSideEffects() {
  yield call(() => console.log('decrease!'))
}

export function* counterSagas() {
  yield all([
    takeEvery(ActionTypes.COUNTER.INCREMENTAL, increaseSideEffects),
    takeEvery(ActionTypes.COUNTER.DECREMENTAL, decreaseSideEffects),
  ])
}
