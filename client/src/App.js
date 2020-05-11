import React, { useEffect } from "react";
import "./App.scss";
import { createBrowserHistory } from "history";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { userChanged } from "./actions/userActions";
import Login from "./components/login/Login";
import ImagesWall from "./components/imagesWall/ImagesWall";
import OrderList from "./components/orderLIst/OrderList";
import AdminOrderList from "./components/adminOrderList/AdminOrderList";

function App( { user, dispatch } ) {

	useEffect( () => {
		const uuid = Cookies.get( "user" );
		if( !uuid ){
			Cookies.set( "user", uuidv4(), { expires: 7 } );
		}
		user.uuid = uuid;
		dispatch( userChanged( { ...user } ) );
	}, [] );

	return (
		<Router history={createBrowserHistory()}>
			<div className="app">
				<div className="main">
					<div className="app-routes">
						<Switch>
							<Route path="/orders" component={OrderList}/>
							<Route path="/adminOrders" component={AdminOrderList}/>
							<Route path="/admin" component={Login} />
							<Route path="/" component={ImagesWall} />
						</Switch>
					</div>
				</div>
				<div className="footer">
					<div className="link">
						<Link to="/orders"> My Orders History </Link>
						<Link to="/admin"> Admin? </Link>
						<Link to="/"> Home </Link>
					</div>
				</div>
			</div>
		</Router>
	);
}

const mapStateToProps = function ( state ) {
	return {
		user: state.user
	};
};

export default connect( mapStateToProps )( App ) ;
