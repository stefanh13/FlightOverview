import { type } from './actions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case type.increment:
      return state + 1
    case type.incrIfOdd:
      return (state % 2 !== 0) ? state + 1 : state
    case type.decrement:
      return state - 1
    default:
      return state
  }
}
