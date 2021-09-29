import { combineReducers } from "redux";
import types from '../actions/types'
import { fetchSongData } from '../api'

const songsReducer = () => {
  return fetchSongData()
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

const selectedArtistReducer = (selectedArtist = null, action) => {
  switch (action.type) {
    case types.ARTIST_SELECTED:
      return action.payload
    default:
      return selectedArtist
  }
}

const artistInfoReducer = (artistInfo = null, action) => {
  switch (action.type) {
    case types.FETCH_ARTIST_INFO_SUCCESS:
      console.log(action)
      return action.payload
    default:
      return artistInfo
  }
}

export default combineReducers({
  // this is where state is (store)
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  selectedArtist: selectedArtistReducer,
  artistInfo: artistInfoReducer,
})
