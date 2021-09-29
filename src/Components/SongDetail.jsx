import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song, artist, artistInfo }) => {
  if (!song) {
    return <div>Select a song</div>
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <br />
      <p>Artist: {artist}</p>
      <br />
      <p>Duration: {song.duration}</p>
      <div className="artist-details">
        <h4 className="underline">Artist Details</h4>
        <h5>All albums by this artist: </h5>
        <ul>
          {artistInfo &&
            artistInfo.album.map(item => {
              return <li>{item.strAlbum}</li>
            })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    song: state.selectedSong,
    artist: state.selectedArtist,
    artistInfo: state.artistInfo,
  }
}

export default connect(mapStateToProps)(SongDetail);
