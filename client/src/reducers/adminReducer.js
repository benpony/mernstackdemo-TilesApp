import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer( state = initialState.admin, action ) {
	switch ( action.type ) {
	case types.ADMIN_CHANGED_SUCCESS:{
		return action.admin;
	}
	default:
		return state;
	}
}
