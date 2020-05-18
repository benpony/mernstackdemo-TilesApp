import React from "react";
import PropTypes from "prop-types";
import OrderCard from "../orderCard/OrderCard";
import Grid from "@material-ui/core/Grid";

const OrderList = ( { orders, hidePreview } ) => {
	return (
		<div className="OrderListComponent">
			<Grid
				className="grid"
				container
				direction="row"
				spacing={1}>

				{orders.map( order=>( order ?
					<Grid
						className="gridItem"
						key={order.uuid}
						item xs={12}
						sm={6}
						md={3}>
						<OrderCard
							order={order}
							hidePreview={hidePreview}/>
					</Grid> : undefined ) )}
			</Grid>
		</div>
	);
};
OrderList.propTypes = {
	orders: PropTypes.array.isRequired,
	hidePreview : PropTypes.bool
};

export default OrderList;
