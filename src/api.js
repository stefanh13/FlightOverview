import axios from 'axios'

export const fetchFlightsAPI = flightType => {
  return axios.get(`http://apis.is/flight?language=is&type=${flightType}`)
}
