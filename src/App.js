import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import AvailableHotels from './components/SearchResult/AvailableHotels/AvailableHotels';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import ReviewHotelRules from './components/ReviewHotelRules/ReviewHotelRules';

function App() {
  return (
    <div className="App">
      <Home/>
      <AvailableHotels/>
      <HotelDetails></HotelDetails>
      <ReviewHotelRules></ReviewHotelRules>
      <Login></Login>
    </div>
  );
}

export default App;
