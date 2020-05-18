import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	grid: {
		flexGrow: 1,
		maxWidth: "80vh",
	},
	orderForm: {
		margin: "60px 30px 40px",
	},
	textField:{
		minWidth:"36vh",
	},
	buttons: {
		"& > *": {
			margin: theme.spacing( 1 ),
		},
	},
} ) );
