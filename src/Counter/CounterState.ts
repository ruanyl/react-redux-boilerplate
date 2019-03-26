import { createState } from 'immutable-state-creator'

export const Counter = createState('Counter', {
  total: 0,
})
