import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	root:{

	},
	loginForm: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	fields:{
		height: 300,
		margin: 50,
	},
	field:{
		width: 245
	},
	buttons: {
		"& > *": {
			height:80,
			width:200,
			margin: theme.spacing( 1 ),
		},
	},
} ) );