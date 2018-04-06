import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchFlightsAPI } from './api'
import { type, fetchArrivalFlightsResolved, fetchDepartureFlightsResolved } from './actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* onfetchFlights(action) {
   try {
      const flights = yield call(fetchFlightsAPI, action.flightType)
      if(action.flightType === 'arrivals') {
        yield put(fetchArrivalFlightsResolved(flights.data.results))
      } else if(action.flightType === 'departures') {
        yield put(fetchDepartureFlightsResolved(flights.data.results))
      }

   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery('fetchFlights', onfetchFlights);
}



export default mySaga;
