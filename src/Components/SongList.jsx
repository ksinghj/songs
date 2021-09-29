import React from "react";
import { connect } from "react-redux";
import { selectSong, selectArtist } from '../actions'

const SongList = props => {
  return props.songs.map(song => {
    return (
      <div className="ui divided list">
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                props.selectSong(song)
                props.selectArtist(song.artist)
              }}
              className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">
            <p>
              {song.title}, {song.artist}
            </p>
          </div>
        </div>
      </div>
    )
  })
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

const mapDispatchToProps = {
  selectSong,
  selectArtist,
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
