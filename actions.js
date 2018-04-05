import store from './store.js'

export const type = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  incrIfOdd: 'INCREMENT_IF_ODD',
}

export const incrementAction = () => store.dispatch({
  type: type.increment,
})

export const decrementAction = () => store.dispatch({
  type: type.decrement,
})
