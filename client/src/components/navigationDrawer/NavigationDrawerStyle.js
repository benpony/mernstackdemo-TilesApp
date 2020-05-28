import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( {
	list: {
		width: 250,
	},
	listItem:{
		height:60,
		color: "#ff037d",
		"& span":{
			fontWeight: 500,
		}
	},
	listIcon:{
		color: "#ff037d",
		fontSize:28
	},
	fullList: {
		width: "auto",
	},
	divider:{
		marginTop:20
	},
	menuButton: {
		color:"white",
		fontSize: 40,
		marginRight:10
	}
} );
