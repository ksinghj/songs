import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actions/types'
import { fetchArtistInfo, artistInfoType } from '../api'

// worker Saga: will be fired on FETCH_ARTIST_INFO_SUCCESS actions
export function* fetchArtistInfoWorker(action: AnyAction) {
  try {
    const artistInfo: artistInfoType = yield call(fetchArtistInfo, action.payload)
    yield put({
      // can we change this to action creator?
      type: actionTypes.FETCH_ARTIST_INFO_SUCCESS,
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
  yield takeLatest(actionTypes.ARTIST_SELECTED, fetchArtistInfoWorker)
}

export default mySaga
