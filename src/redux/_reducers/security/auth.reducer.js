import { authConstants } from '../../_constants';

let user = localStorage.getItem('username');
// let token = localStorage.getItem('token');

const initialState = () => ({user})
    //   return token ? { loggedIn: true, user } : { loggedIn: false };

export function auth(state = initialState(), action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        _submitted: true,
        user: action.payload
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}