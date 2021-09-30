import { call } from 'redux-saga/effects'
import { fetchArtistInfoWorker } from '.'
import types from '../actions/types'
import { fetchArtistInfo } from '../api'

const iterator = fetchArtistInfoWorker(types.FETCH_ARTIST_INFO)

describe('api calls', () => {
  it('fetch artist info worker saga should yield an effect object (call)', () => {
    expect(call(fetchArtistInfo, undefined)).toStrictEqual(iterator.next().value)
  })
})
