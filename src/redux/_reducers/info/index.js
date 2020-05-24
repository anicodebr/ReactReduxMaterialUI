import { combineReducers } from 'redux';

import { alert } from './alert.reducer';


const info = combineReducers({
    alert
});

export default info;