import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'
import rootSagas from './rootSagas'
import { ActionTypes } from './actionTypes'

const sagaMiddleware = createSagaMiddleware()
let middlewares: any[] = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    stateTransformer: state => state.toJS(),
  })
  middlewares = [...middlewares, logger]
}

export const configureStoreBase = (reducers: any, sagas: any, preloadedState: any) => {
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middlewares)
  )
  sagaMiddleware.run(sagas)

  store.dispatch({ type: ActionTypes.APP.MOUNT })

  return store
}

const configureStore = (preloadedState?: any) => configureStoreBase(rootReducer, rootSagas, preloadedState)

export default configureStore
