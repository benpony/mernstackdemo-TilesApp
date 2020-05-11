import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import orders from "./ordersReducer";
import user from "./userReducer";
import admin from "./adminReducer";

const rootReducer = combineReducers( {
	user,
	orders,
	admin,
	form: reduxFormReducer,
} );

export default rootReducer;
