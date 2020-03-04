import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Elevate', duration: '3:45'},
        { title: 'Come Thru', duration: '3:48'},
        { title: 'Hotline Bling', duration: '3:21'},
        { title: 'Passionfruit', duration: '4:45'}
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
} 

export default combineReducers({
    // this is where state is (store)
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
