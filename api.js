import axios from 'axios'

export const fetchFlights = flightType => {
  return axios.get(`http://apis.is/flight?language=is&type=${flightType}`)
}
