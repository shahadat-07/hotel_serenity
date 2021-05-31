import { combineReducers } from "redux";
import adultsReducer from "./adults";
import childReducer from './child';
import babiesReducer from './babies';
import locationReducer from "./location";
import arrivalReducer from "./arrival";
import departureReducer from "./departure";
import hotelReducer from "./hotel";

const allReducers = combineReducers({
    adults: adultsReducer,
    child: childReducer,
    babies: babiesReducer,
    location: locationReducer,
    arrivalDate: arrivalReducer,
    departure: departureReducer
})

export default allReducers;