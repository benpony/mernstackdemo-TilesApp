import axios from "axios";
import * as types from "./actionTypes";

const options = {
	headers: { "Content-Type": "application/json" }
};

export function loadUserOrders( uuid ) {
	return dispatch => {
		if( uuid && uuid.length ){
			axios.get( `/orders?uuid=${uuid}`, options )
				.then( function ( response ) {
					const descArray = response.data.orders.reverse();
					dispatch( loadUserOrdersSuccess( descArray ) );
				} )
				.catch( console.error );
		}
	};
}

export function createUserOrder( user ) {
	return dispatch => {
		axios.post( "/order", user, options )
			.then( function ( response ) {
				dispatch( createOrderSuccess(
					response.data.order )
				);
			} )
			.catch( console.error );
	};
}

export function loadUserOrdersSuccess( orders ) {
	return { type: types.LOAD_USER_ORDERS_SUCCESS, orders };
}

export function createOrderSuccess( order ) {
	return { type: types.CREATE_USER_ORDER_SUCCESS, order };
}
