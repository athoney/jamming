import Header from './components/Header';
import Results from './components/Results';
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';
import Songs from './json/songs.json';
import PlaylistData from './json/playlist.json';

function App() {
  const [songs, setSongs] = useState(Songs);


  const [playlist, setPlaylist] = useState(PlaylistData);
  const addToPlayList = (song) => {
    if (playlist.songs.includes(song)) {
      return;
    }
    else {
      setPlaylist((prev) => {
        return {
          ...prev,
          songs: [...prev.songs, song],
        };
      });
    }
  };

  const changePlaylistName = (name) => {
    setPlaylist((prev) => {
      return {
        playlist: name,
        songs: prev.songs,
      };
    });
  }

  const removeFromPlaylist = (id) => {
    console.log(id)
    setPlaylist((prev) => {
      return {
        playlist: prev.playlist,
        songs: prev.songs.filter((item) => item.id !== id),
      };
    });
    console.log(playlist)
  };
  // setSongs(Songs);
  // const search = async (term, location, sortBy) => {
  //   const response = await SearchYelp(term, location, sortBy);
  //   console.log("Props")
  //   console.log(response);
  //   setSongs(response);
  // };


  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className='row justify-content-evenly'>
        <div className='col-4'>
          <Results data={songs} addToPlayList={addToPlayList}/>
        </div>
        <div className='col-4'>
          <Playlist data={playlist} removeFromPlaylist={removeFromPlaylist} changePlaylistName={changePlaylistName}/>
        </div>
      </div>
    </div>
  );
}

export default App;
