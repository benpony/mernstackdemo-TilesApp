import { makeStyles } from "@material-ui/core/styles";

const textStyle = {
	textTransform: "uppercase",
	letterSpacing: "1.6px",
	color: "#8c8c8c",
	width: "100%",
	textAlign: "center",
};

export const useStyles = makeStyles( ( theme ) => ( {
	root:{
		display: "flex",
		flexGrow: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	grid: {
		maxWidth: "600px",
	},
	button: {
		fontWeight: "bold",
		height: "100px",
		width: "300px",
		borderWidth: "medium",
		margin: "0 0 20px 0"
	},
	pickSomePhotosText:	{
		paddingTop: "1rem",
		fontSize: "14px",
		fontWeight: "700",
		...textStyle
	},
	rotateMessage: {
		paddingBottom: "1rem",
		fontSize: "10px",
		...textStyle,
	},
	imagesCounter:{
		paddingTop: "1rem",
		fontSize: "14px",
		fontWeight: "700",
		...textStyle
	}
} ) );
