import { combineReducers } from 'redux';

import StartDate from './reducer_startDate';
import EndDate from './reducer_endDate';

const rootReducer = combineReducers({
    startDate: StartDate,
    endDate: EndDate
});

export default rootReducer;