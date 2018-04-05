import { type } from './actions'

const initialState = {
  flights: undefined
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchFlightsResolved':
      return { ...state, flights: action.flights }
    default:
      return state
  }
}
