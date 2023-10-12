import Header from './components/Header';
import Results from './components/Results';

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <div className='row justify-content-evenly'>
        <div className='col-4'>
          <Results/>
        </div>
        <div className='col-4'>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
