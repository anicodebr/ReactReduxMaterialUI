import { combineReducers } from 'redux';

import { auth } from './auth.reducer';


const security = combineReducers({
    auth
});

export default security;