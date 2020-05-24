import { combineReducers } from 'redux';

import info from './info';
import security from './security';

const rootReducer = combineReducers({
  info,
  security,
});

export default rootReducer;