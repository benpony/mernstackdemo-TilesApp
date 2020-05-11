import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	loginForm: {
		textAlign: "center",
	},
	fields:{
		height:200,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: theme.spacing( 3 ),
	},
	field:{
		width: 245
	},
	buttons: {
		"& > *": {
			margin: theme.spacing( 1 ),
		},
	},
} ) );