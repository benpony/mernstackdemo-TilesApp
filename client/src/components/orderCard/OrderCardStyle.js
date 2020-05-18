import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const fontFamily = "cursive";

export const useStyles = makeStyles( ( theme ) => ( {
	root: {
		maxWidth: 345,
		borderRadius:10,
		margin:"auto"
	},
	media: {
		height: 0,
		paddingTop: "36.25%" // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create( "transform", {
			duration: theme.transitions.duration.shortest,
		} ),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		opacity: 0.8,
		fontFamily:fontFamily,
	},
	center: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		margin:40,
	},
	typography: {
		"& span": {
			fontFamily:fontFamily,
		}
	},
	id: {
		marginLeft: 29,
		fontSize: 11,
		fontFamily:fontFamily,
		lineHeight: 2,
	}
} ) );
