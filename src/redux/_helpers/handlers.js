import { alertActions } from "Redux@Actions";

export function request(type, payload, msg) {
    return async (dispatch) => {
        if (msg) alertActions.request(msg);
        return dispatch({ type: type, payload });
    };
}
  
export function success(type, payload, msg) {
    return async (dispatch) => {
        if (msg) alertActions.success(msg);
        return dispatch({ type: type, payload });
    };
}
  
export function failure(type, payload, data) {
    const { msg, title } = data
    let _title = title;
    if(!title)
        _title = "Oops! Tivemos um problema!"
    return async (dispatch) => {
        if (msg && title) dispatch(alertActions.error(msg, _title));
        return dispatch({ type: type, payload });
    };
}