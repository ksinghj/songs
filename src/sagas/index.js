import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../actions/types'
import { fetchArtistInfo } from '../api'

// worker Saga: will be fired on FETCH_ARTIST_INFO_SUCCESS actions
function* fetchArtistInfoWorker(action) {
  try {
    const artistInfo = yield call(fetchArtistInfo, action.payload)
    yield put({
      // can we change this to action creator?
      type: types.FETCH_ARTIST_INFO_SUCCESS,
      payload: artistInfo,
    })
  } catch (e) {
    console.warn(e)
  }
}

// calls fetchArtistInfoWorker on dispatched `ARTIST_SELECTED` action
// all it does is watch for the action, then call the worker
// the worker calls the api, returns an action with the data in the payload!
// in the worker, put() sends the payload from the api to the store, ready to use in our components!
function* mySaga() {
  yield takeLatest(types.ARTIST_SELECTED, fetchArtistInfoWorker)
}

export default mySaga
