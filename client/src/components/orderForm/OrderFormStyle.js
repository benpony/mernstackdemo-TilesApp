import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	grid: {
		flexGrow: 1,
		maxWidth: "80vh",
	},
	orderForm: {
		margin: "30px",
	},
	textField:{
		"& input": {
			minWidth:"260px",
		}
	},
	buttons: {
		"& > *": {
			margin: theme.spacing( 1 ),
		},
	},
} ) );
