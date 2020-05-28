import React from "react";
import PropTypes from "prop-types";
import OrderCard from "../orderCard/OrderCard";
import Grid from "@material-ui/core/Grid";
import "./OrderList.scss";

const OrderList = ( { orders, hidePreview, hideGestures } ) => {
	return (
		<div className="OrderListComponent">
			<Grid
				container
				className="ordersGrid"
				direction="row"
				spacing={2}>
				{orders.length ? orders.map( order => (
					<Grid
						className="gridItem"
						key={order.uuid}
						item xs={12} sm={6} md={4} lg={3}>
						<OrderCard
							order={order}
							hidePreview={hidePreview}
							hideGestures={hideGestures}/>
					</Grid> ) ) : undefined}
			</Grid>
		</div>
	);
};
OrderList.propTypes = {
	orders: PropTypes.array.isRequired,
	hidePreview : PropTypes.bool,
	hideGestures: PropTypes.bool
};

export default OrderList;
