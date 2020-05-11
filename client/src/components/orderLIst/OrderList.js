import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUserOrders } from "../../actions/orderActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./OrderListStyle";

const OrderList = ( { orders, user, dispatch } ) => {
	const classes = useStyles();
	const getOrders = () => {
		dispatch( loadUserOrders( user.uuid ) );
	};

	useEffect( () => {
		getOrders();
	}, [ user.uuid ] );

	return (
		<div className={classes.root}>
			{orders.map( order=>{
				return order ?
					( <Card
						key={order.uuid}
						className={classes.card}>
						<CardContent>
							<Typography
								className={classes.title}
								color="textSecondary"
								gutterBottom>
								NAME: {order.name}
							</Typography>
							<Typography
								className={classes.subTitle}
								color="textSecondary"
								gutterBottom>
								ORDER ID: {order.uuid}
							</Typography>
							<Typography
								className={classes.subTitle}
								color="textSecondary"
								gutterBottom>
								ADDRESS: {order.address}
							</Typography>

							{order.images.map( ( img, index ) =>{
								return img && img.dataURL?
									<img
										key={index}
										className={classes.imagePreview}
										src={img.dataURL}/> : undefined;
							} )}
						</CardContent>
					</Card> ) : undefined;
			} )}
		</div>
	);
};
OrderList.propTypes = {
	orders: PropTypes.array,
};

const mapStateToProps = function ( state, ownProps ) {
	return {
		user: state.user,
		orders: state.orders
	};
};

export default connect( mapStateToProps )( OrderList );
