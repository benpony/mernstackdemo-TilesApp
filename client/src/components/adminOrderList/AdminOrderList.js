import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadAdminOrders } from "../../actions/adminActions";
import OrderList from "../orderLIst/OrderList.js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( {
	root:{},
	title: {
		fontSize: 12,
		fontWeight: "bold",
		margin: "15px 30px"
	},
} );

const AdminOrderList = ( { orders, admin, dispatch } ) => {
	const classes = useStyles();
	const getOrders = () => {
		dispatch( loadAdminOrders( admin ) );
	};

	useEffect( () => {
		getOrders();
	}, [ admin.adminPassword ] );

	return (
		<div className={classes.root}>
			{admin.users.map( user => (
				<div key={user.uuid}>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom>
							USER ID : {user.uuid}
					</Typography>

					<OrderList orders={orders}/>
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
