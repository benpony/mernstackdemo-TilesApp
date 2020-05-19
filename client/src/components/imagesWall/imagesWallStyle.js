import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../../assets/brick-room-opacity_max.png";

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
	pickSomePhotosText:{
		paddingTop: "2rem",
		textTransform: "uppercase",
		fontWeight: "700",
		fontSize: "14px",
		letterSpacing: "1.6px",
		color: "#8c8c8c",
		width: "100%",
		textAlign: "center",
		minHeight:"40px",
	}
} ) );
