import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import AvailableHotels from './components/SearchResult/AvailableHotels/AvailableHotels';

function App() {
  return (
    <div className="App">
      <Home/>
      <AvailableHotels/>
    </div>
  );
}

export default App;
