import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import AvailableHotels from './components/SearchResult/AvailableHotels/AvailableHotels';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Login/Login';
import ReviewHotelRules from './components/ReviewHotelRules/ReviewHotelRules';
import hotelsData from './FakeData/HotelFakeData.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  // const handlePushData = () => {
  //   fetch('https://powerful-harbor-18198.herokuapp.com/addHotels', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(hotelsData)
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))

  // }

  return (
    <Router className="App">
      {/* <button onClick={handlePushData}>push Data</button> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hotels">
          <AvailableHotels />
        </Route>
        <Route path="/hotels/:id">
          <HotelDetails />
        </Route>
      </Switch>

      {/* <ReviewHotelRules></ReviewHotelRules>
      <Login></Login> */}
    </Router>
  );
}

export default App;
