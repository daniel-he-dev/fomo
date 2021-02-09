import './App.css';
import NYT from './components/NYT'
import Reddit from './components/Reddit'
import Trends from './components/Trends'
import SearchBar from './components/SearchBar'
import Wikipedia from './components/Wikipedia'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Trends />
      <Reddit />
      <NYT />
      <Wikipedia />f]
    </div>
  );
}

export default App;
