import * as types from "./actionTypes";

export function userChanged( user ) {
	return dispatch => {
		dispatch( userChangedSuccess( user ) );
	};
}

export function userChangedSuccess( user ) {
	return { type: types.USER_CHANGED_SUCCESS, user };
}
