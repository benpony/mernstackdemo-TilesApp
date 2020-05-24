import React, { useEffect } from "react";
import "./App.scss";
import { createBrowserHistory } from "history";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { usePromiseTracker } from "react-promise-tracker";
import { LoadingIndicator } from "./components/index";
import { userChanged } from "./actions/userActions";
import { loadUserOrders } from "./actions/orderActions";
import NavDrawer from "./components/navigationDrawer/NavigationDrawer";
import Login from "./components/login/Login";
import ImagesWall from "./components/imagesWall/ImagesWall";
import UserOrderList from "./components/UserOrderList/UserOrderList";
import AdminOrderList from "./components/adminOrderList/AdminOrderList";

const App = ( { user, dispatch } ) => {
	const { promiseInProgress } = usePromiseTracker( );

	useEffect( () => {
		( async ()=>{
			const uuid = Cookies.get( "user" );
			if( !uuid ){
				Cookies.set( "user", uuidv4(), { expires: 7 } );
			}
			user.uuid = uuid;
			await dispatch( userChanged( { ...user } ) );
			await dispatch( loadUserOrders( user.uuid ) );
		} )();
	}, [] );

	return (
		<Router history={createBrowserHistory()}>
			<div className="app">
				<div className="header">
					<NavDrawer/>
				</div>
				<div className="main">
					{promiseInProgress ?
						<LoadingIndicator/> :
						<div className="app-routes">
							<Switch>
								<Route path="/orders" component={UserOrderList}/>
								<Route path="/adminOrders" component={AdminOrderList}/>
								<Route path="/admin" component={Login} />
								<Route path="/" component={ImagesWall} />
							</Switch>
						</div>
					}
				</div>
				<div className="footer"/>
			</div>
		</Router>
	);
};

const mapStateToProps = function ( state ) {
	return {
		user: state.user
	};
};

export default connect( mapStateToProps )( App ) ;
