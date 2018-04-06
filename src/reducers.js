import { type } from './actions'

const initialState = {
  arrivalFlights: undefined,
  departureFlights: undefined,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.fetchArrivalFlightsResolved:
      return { ...state, arrivalFlights: action.flights }
    case type.fetchDepartureFlightsResolved:
      return { ...state, departureFlights: action.flights }
    default:
      return state
  }
}
