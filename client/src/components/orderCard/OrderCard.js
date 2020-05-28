import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FramedImage from "../framedImage/FramedImage";
import moment from "moment-es6";
import { useStyles } from "./OrderCardStyle";

const OrderCard = ( { order, hidePreview, hideGestures } ) => {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState( false );

	const handleExpandClick = () => {
		setExpanded( !expanded );
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						aria-label="recipe"
						className={classes.avatar}>
						{order.name.charAt( 0 )}
					</Avatar>
				}
				title={order.address}
				subheader={ order.date && moment( order.date ).format( "ddd, MM, DD, YYYY hh:mm a" )}
				className={classes.typography}/>
			{!hidePreview &&
				<CardMedia
					className={classes.media}
					image={order.images[0].location}
					title="Paella dish"/>
			}
			<CardActions disableSpacing>
				{!hideGestures && ( <>
					<IconButton
						aria-label="add to favorites"
						disabled={true}
						style={{ opacity:0.4 }}>
						<FavoriteIcon />
					</IconButton>
					<IconButton
						aria-label="share"
						disabled={true}
						style={{ opacity:0.4 }}>
						<ShareIcon />
					</IconButton>
				</> )}
				<IconButton
					className={
						clsx( classes.expand, { [classes.expandOpen]: expanded, } )
					}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse
				in={expanded}
				timeout="auto"
				unmountOnExit>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.id}>
						TO: {order.name}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.id}>
						ID: {order.uuid}
					</Typography>

					{order.images.map( ( img, index ) =>(
						<div
							className={classes.center}
							key={index}>
							<FramedImage
								imageNumber={index}
								isSelected={true}
								image={img}/>
						</div>
					) )}
				</CardContent>
			</Collapse>
		</Card>
	);
};
OrderCard.propTypes = {
	order: PropTypes.object.isRequired,
	hidePreview: PropTypes.bool,
	hideGestures: PropTypes.bool
};

export default OrderCard;
