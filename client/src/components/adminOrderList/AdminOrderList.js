import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadAdminOrders } from "../../actions/adminActions";
import OrderList from "../orderLIst/OrderList.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/SearchSharp";

const AdminOrderList = ( { admin, dispatch } ) => {
	const [ _users, setUsers ] = useState( [] );

	useEffect( () => {
		( async () => {dispatch( loadAdminOrders( admin ) ); } )();
	}, [ admin.adminPassword ] );

	useEffect( () => {
		if( admin && admin.users.length ){
			setUsers( admin.users );
		}
	}, [ admin.users ] );

	return (
		<div className="adminOrderListComponent">
			<Autocomplete
				className="searchBar"
				freeSolo
				options= { _users.map( option => option.uuid ) }
				onChange={( event, newValue ) => {
					newValue?
						setUsers( _users.filter( user => user.uuid === newValue ) ) :
						setUsers( admin.users );
				}}
				renderInput={( params ) => (
					<TextField
						{...params}
						label= {( <SearchIcon/> )}
						placeholder="Search by user id.."
						margin="normal"
						variant="outlined"
						color="secondary"
					/>
				)}
			/>

			{_users.map( user => (
				<div key={user.uuid}>
					<OrderList
						orders={user.orders}
						hidePreview={true}
						hideGestures={true}
					/>
				</div>
			) )}
		</div>
	);
};

AdminOrderList.propTypes = {
	admin: PropTypes.object,
};

const mapStateToProps = function ( state ) {
	return {
		admin: state.admin
	};
};

export default connect( mapStateToProps )( AdminOrderList );
