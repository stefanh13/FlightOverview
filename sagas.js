import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchFlights } from './api'
import { type, fetchFlightsResolved } from './actions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* onfetchFlights(action) {
   try {
      const flights = yield call(fetchFlights, 'departure');
      yield put(fetchFlightsResolved(flights.data.results));
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery('fetchFlights', onfetchFlights);
}



export default mySaga;
