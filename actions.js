export const type = {
  fetchFlights: 'fetchFlights',
  fetchArrivalFlightsResolved: 'fetchArrivalFlightsResolved',
  fetchDepartureFlightsResolved: 'fetchDepartureFlightsResolved',
}

export const fetchFlights = flightType => ({
  type: type.fetchFlights,
  flightType,
})

export const fetchArrivalFlightsResolved = flights => ({
  type: type.fetchArrivalFlightsResolved,
  flights,
})

export const fetchDepartureFlightsResolved = flights => ({
  type: type.fetchDepartureFlightsResolved,
  flights,
})
