import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	grid: {
		flexGrow: 1,
		maxWidth: "80vh",
	},
	orderForm: {
		margin: "30px",
	},
	fields:{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: theme.spacing( 3 ),
	},
	field:{
		width: 245,
		margin: theme.spacing( 3 ),
	},
	buttons: {
		"& > *": {
			margin: theme.spacing( 1 ),
		},
	},
} ) );
