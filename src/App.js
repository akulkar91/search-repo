import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
      {/* <SearchBar /> */}
      <Home />
      </div>
    </div>
  );
}

export default App;
