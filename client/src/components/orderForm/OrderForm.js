import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { userChanged } from "../../actions/userActions";
import { useStyles } from "./OrderFormStyle";
import { renderTextField } from "../index";
import Grid from "@material-ui/core/Grid";

const validate = values => {
	const errors = {};
	const requiredFields = [ "name", "address", "email" ];
	requiredFields.forEach( field => {
		if ( !values[field] ) {
			errors[field] = "Required";
		}
	} );
	if ( values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
		errors.email = "Invalid email address";
	}
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
				<Grid item xs={12}>
					<Field
						className={classes.textField}
						name="name"
						label="Full Name"
						component={renderTextField}
						onChange={nameChanged}
					/>
				</Grid>
				<Grid item xs={12}>
					<Field
						className={classes.textField}
						name="address"
						label="Full Shipping Address"
						component={renderTextField}
						onChange={addressChanged}
					/>
				</Grid>
				<Grid item xs={12}>
					<Field
						className={classes.textField}
						name="email"
						label="Email Address"
						component={renderTextField}
						onChange={emailChanged}
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

	function emailChanged( event, newValue ){
		user.order.email= newValue;
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