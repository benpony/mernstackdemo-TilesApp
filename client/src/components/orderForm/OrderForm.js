import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { userChanged } from "../../actions/userActions";
import { useStyles } from "./OrderFormStyle";
import { renderTextField } from "../index";
import Grid from "@material-ui/core/Grid";

const validate = values => {
	const errors = {};
	const requiredFields = [ "name", "address" ];
	requiredFields.forEach( field => {
		if ( !values[field] ) {
			errors[field] = "Required";
		}
	} );
	return errors;
};

const OrderForm = ( props ) => {
	const classes = useStyles();
	const { pristine, reset, submitting, user, dispatch } = props;

	return (
		<form
			noValidate
			autoComplete="off"
			className={classes.orderForm}>
			<Grid
				className={classes.grid}
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={1}>
				<Grid item xs={12} md={6}>
					<Field
						name="name"
						label="Full Name"
						component={renderTextField}
						onChange={nameChanged}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Field
						name="address"
						label="Full Address"
						component={renderTextField}
						onChange={addressChanged}
					/>
				</Grid>
			</Grid>
		</form>
	);

	function nameChanged( event, newValue ){
		user.order.name= newValue;
		dispatch( userChanged( { ...user } ) );
	}

	function addressChanged( event, newValue ){
		user.order.address= newValue;
		dispatch( userChanged( { ...user } ) );
	}
};

const mapStateToProps = function ( state ) {
	return {
		user: state.user
	};
};

export default reduxForm ( {
	form: "OrderForm",
	validate,
} )( connect( mapStateToProps )( OrderForm ) );