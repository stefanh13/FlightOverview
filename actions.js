import store from './store.js'
export const type = {
  fetchFlights: 'fetchFlights',
  fetchFlightsResolved: 'fetchFlightsResolved',
}

export const fetchFlights = () => ({
  type: type.fetchFlights,
})

export const fetchFlightsResolved = flights => store.dispatch({
  type: type.fetchFlightsResolved,
  flights,
})
