import { all } from 'redux-saga/effects'
import fetchArtistInfo from './fetchArtistInfo'

export default function* rootSaga() {
  yield all([fetchArtistInfo()])
  // code after all-effect
}
