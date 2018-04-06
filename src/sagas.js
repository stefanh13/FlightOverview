import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchFlightsAPI } from './api'
import { type, fetchArrivalFlightsResolved, fetchDepartureFlightsResolved } from './actions'
import flightType from './flightType'

function* onfetchFlights(action) {
   try {
      const flights = yield call(fetchFlightsAPI, action.flightType)
      if(action.flightType === flightType.arrivals) {
        yield put(fetchArrivalFlightsResolved(flights.data.results))
      } else if(action.flightType === flightType.departures) {
        yield put(fetchDepartureFlightsResolved(flights.data.results))
      }

   } catch (e) {
      // yield put({type: "FlIGHT_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery(type.fetchFlights, onfetchFlights);
}



export default mySaga;
