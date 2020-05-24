import React from "react";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

export const renderTextField = ( {
	label,
	input,
	meta: { touched, invalid, error },
	...custom
} ) => (
	<TextField
		label={label}
		error={touched && invalid}
		helperText={touched && error}
		variant="outlined"
		{...input}
		{...custom}
	/>
);

export const LoadingIndicator = () => {
	return ( <div style={{
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}}>
		<CircularProgress
			disableShrink
			color="secondary" />
	</div> );
};