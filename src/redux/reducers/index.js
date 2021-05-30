import { combineReducers } from "redux";
import adultsReducer from "./adults";
import childReducer from './child';
import babiesReducer from './babies';

const allReducers = combineReducers({
    adults: adultsReducer,
    child: childReducer,
    babies: babiesReducer
})

export default allReducers;