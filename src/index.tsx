import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'

import './style.scss'
import { Counter } from './Counter/CounterComponent';

const store = configureStore()

ReactDom.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
