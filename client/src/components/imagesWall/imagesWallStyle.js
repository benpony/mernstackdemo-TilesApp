import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	root:{
		padding: "1rem",
	},
	center: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	grid: {
		flexGrow: 1,
		maxWidth: "600px",
	},
	button: {
		fontWeight: "bold",
		height: "100px",
		width: "300px",
		borderWidth: "medium",
		margin: "0 0 20px 0"
	},
} ) );
