import axios from "axios";
import * as types from "./actionTypes";

const options = {
	headers: { "Content-Type": "application/json" }
};

export function adminChanged( admin ) {
	return dispatch => {
		dispatch( adminChangedSuccess( admin ) );
	};
}

export function loadAdminOrders( admin ) {
	return dispatch => {
		axios.get( `/allOrders?pwd=${admin.adminPassword}`, options )
			.then( function ( response ) {
				admin.users = response.data.users.reverse();
				dispatch( adminChangedSuccess( { ...admin } ) );
			} )
			.catch( console.error );
	};
}


export function adminChangedSuccess( admin ) {
	return { type: types.ADMIN_CHANGED_SUCCESS, admin };
}
