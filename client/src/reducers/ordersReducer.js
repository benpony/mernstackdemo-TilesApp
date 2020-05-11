/* eslint-disable no-fallthrough */
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function ordersReducer( state = initialState.orders, action ) {
	switch ( action.type ) {
	case types.LOAD_USER_ORDERS_SUCCESS:{
		return action.orders;
	}
	case types.CREATE_USER_ORDER_SUCCESS: {
		state = [ action.order, ...state ];
	}
	default:
		return state;
	}
}
