import types from './types'

// Action Creator
export const selectSong = song => {
  // Return an action
  return {
    type: types.SONG_SELECTED,
    payload: song,
  }
}

export const selectArtist = artist => {
  return {
    type: types.ARTIST_SELECTED,
    payload: artist,
  }
}

export const fetchArtistInfoSuccess = artistInfo => {
  return {
    type: types.FETCH_ARTIST_INFO_SUCCESS,
    payload: artistInfo,
  }
}
