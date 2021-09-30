export const fetchSongData = () => {
  return [
    { artist: 'Drake', title: 'Elevate', duration: '3:45' },
    { artist: 'Coldplay', title: 'Princess of China', duration: '4:23' },
    { artist: 'Drake', title: 'Come Thru', duration: '3:48' },
    { artist: 'Drake', title: 'Hotline Bling', duration: '3:21' },
    { artist: 'Drake', title: 'Passionfruit', duration: '4:45' },
  ]
}

export const ARTIST_INFO_URL = 'https://theaudiodb.com/api/v1/json/1/discography.php?s='
// fetch artist other albums
export const fetchArtistInfo = artistName => {
  return fetch(`${ARTIST_INFO_URL}${artistName}`)
    .then(res => res)
    .then(data => data.json())
}
