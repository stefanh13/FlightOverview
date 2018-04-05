import { store } from './store.js'


export const getFlights = () => {
  const bla = store ? store.getState() : undefined
  debugger
  return bla
}
