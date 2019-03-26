import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Counter as CounterState } from './CounterState';
import { increase, decrease } from './counterReducer';

type CounterComponentProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export const CounterComponent: React.SFC<CounterComponentProps> = ({increase, decrease, total}) => {
  console.log(total)
  return (
    <div>
      <button onClick={increase}>+</button>
      {total}
      <button onClick={decrease}>-</button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  total: CounterState.get('total'),
})

const mapDispatchToProps = {
  increase,
  decrease,
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
