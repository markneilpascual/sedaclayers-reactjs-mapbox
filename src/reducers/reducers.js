import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";
import legendReducer from "./legendReducer";
import sedacLayerReducer from "./sedacLayerReducer";
import selectedSedacLayerReducer from "./selectedSedacLayerReducer";

const reducers = combineReducers({
    country: countryReducer,
    countries: countriesReducer,
    category: sedacLayerReducer,
    sedacLayerKey: selectedSedacLayerReducer,
    legends: legendReducer,
});

export default reducers;
