import { combineReducers } from 'redux';

import startDate from './reducer_startDate';
import endDate from './reducer_endDate';

const rootReducer = combineReducers({
    startDate: startDate,
    endDate: endDate
});

export default rootReducer;