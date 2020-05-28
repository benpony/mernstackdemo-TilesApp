import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment-es6";
import OrderList from "../orderLIst/OrderList";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/SearchSharp";
import "./UserOrderList.scss";

const UserOrderList = ( { orders } ) => {

	const [ _orders, setOrders ] = useState( [] );

	useEffect( () => {
		if( orders && orders.length ){
			orders.forEach( order => {
				order.date = moment( order.date )
					.format( "MM/DD/YYYY" );
			} );
			setOrders( orders );
		}
	}, [ orders ] );

	return (
		<div className="UserOrderList">
			<Autocomplete
				className="searchBar"
				freeSolo
				options={Array.from( new Set( orders.map( option => option.date ) ) )}
				onChange={( event, newValue ) => {
					newValue?
						setOrders( orders.filter( order => order.date === newValue ) ) :
						setOrders( orders );
				}}
				renderInput={( params ) => (
					<TextField
						{...params}
						label= {( <SearchIcon/> )}
						placeholder="Search by date.."
						margin="normal"
						variant="outlined"
						color="secondary"
					/>
				)}
			/>

			<OrderList orders={_orders}/>
		</div>
	);
};

UserOrderList.propTypes = {
	orders: PropTypes.array.isRequired,
};

const mapStateToProps = function ( state ) {
	return {
		orders: state.orders
	};
};

export default connect( mapStateToProps )( UserOrderList );