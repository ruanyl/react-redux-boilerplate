import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/configureStore'

import './style.css'
import { Counter } from '../src/Counter/CounterComponent';

const store = configureStore()

ReactDom.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
