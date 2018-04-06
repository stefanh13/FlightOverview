import { type } from './actions'

const initialState = {
  arrivalFlights: undefined,
  departureFlights: undefined,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchArrivalFlightsResolved':
      return { ...state, arrivalFlights: action.flights }
    case 'fetchDepartureFlightsResolved':
      return { ...state, departureFlights: action.flights }
    default:
      return state
  }
}
