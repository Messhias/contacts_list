import {combineReducers, createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

// importing the reducers.
import Taxes from  './taxes';
import Cities from './cities';
import OperationalZones from './operationalZones';
import LongHaulZones from './longHaulZones';
import Vehicles from './vehicles';
import VehiclesTypes from './vehiclesTypes';
import GoodsTypes from './goodsTypes';
import VehiclesBrands from './vehiclesBrands';
import Verifications from './verifications';
import BookingsEstimations from './bookings/estimations';

const enhancers = [];


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

/**
 * Combining the reducers.
 *
 * @type {Reducer<unknown>}
 */
const reducers = combineReducers({
    Verifications,
    Taxes,
    Cities,
    OperationalZones,
    LongHaulZones,
    Vehicles,
    VehiclesTypes,
    VehiclesBrands,
    GoodsTypes,
    BookingsEstimations,
});
/**
 * @return ReduxStore
 */
export default createStore(
    reducers,
    applyMiddleware(thunk),
);
