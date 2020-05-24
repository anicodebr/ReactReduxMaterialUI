import { alertConstants } from '../../_constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        _message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        _message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}