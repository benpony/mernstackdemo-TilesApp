import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( {
	root:{
		padding:20
	},
	card: {
		minWidth: 275,
		margin:20,
	},
	title: {
		fontSize: 14,
		fontWeight: "bold"
	},
	subTitle:{
		fontSize:12,
	},
	images:{
		margin:20
	},
	imagePreview:{
		display:"inline-block",
		margin:10,
		padding:10,
		border:"1px dotted grey",
		height:80,
		width:80
	}
} );