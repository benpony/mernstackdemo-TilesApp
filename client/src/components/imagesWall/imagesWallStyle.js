import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
	root: {
		flexGrow: 1,
		maxWidth: "80vh",
	},
	center: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		fontWeight: "bold",
		height: "100px",
		width: "300px",
		borderWidth: "medium",
		margin: "0 0 20px 0"
	},
} ) );
