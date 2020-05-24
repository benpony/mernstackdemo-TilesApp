import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./imagesWallStyle";
import { connect } from "react-redux";
import { userChanged } from "../../actions/userActions";
import { createUserOrder } from "../../actions/orderActions";
import { v4 as uuidv4 } from "uuid";
import { isMobile } from "react-device-detect";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FramedImage from "../framedImage/FramedImage";
import OrderForm from "../orderForm/OrderForm";

const ImagesWall = ( { user, dispatch, history } ) => {
	const classes = useStyles();
	const matches = useMediaQuery( "(min-width:600px)" );
	const [ images, setImages ] = useState( [ ] );

	const imageSelectionChanged = ( imageNumber, image ) =>{
		if( isItemsSelected( image ) ){
			images[imageNumber] = image[0];
			setImages( [ ...images ] );
		} else {
			images.splice( imageNumber, 1 );
			setImages( [ ...images ] );
		}
		user.order.images = images;
		dispatch( userChanged( { ...user } ) );
	};

	const submitOrder = () => {
		user.uuid = user.uuid ? user.uuid : uuidv4();
		user.order = {
			uuid: uuidv4(),
			name: user.order.name,
			address: user.order.address,
			email: user.order.email,
			date: new Date(),
			images
		};
		dispatch( createUserOrder( user ) );
		history.push( "/orders" );
	};

	const getTilesGridItems = ( numOfTiles ) => numOfTiles.map( ( val, index ) => (
		<Grid
			key={index}
			item xs={12} sm={6}>
			<FramedImage
				imageNumber={index}
				image={images[index]}
				callback={imageSelectionChanged}
				isSelected={images[index] ? true : false}/>
		</Grid> ) );

	const getTilesOrderForm = () => ( <>
		<OrderForm/>
		<Button
			className={classes.button}
			variant="outlined"
			color="primary"
			onClick={submitOrder}
			disabled={!isOrderComplete( images )}>
			Order
		</Button>
	</> );

	const isItemsSelected = array => Array.isArray( array ) && array.length;
	const isOrderFormComplete = order => order.name && order.address && order.email;
	const isOrderComplete = images => isItemsSelected( images ) && isOrderFormComplete( user.order );

	return (
		<div className={classes.root}>
			<div className={classes.pickSomePhotosText}>
					pick some photos!
			</div>
			<div className={classes.rotateMessage}>
				{isMobile && <>
					{!matches ?
						<>
							<p> rotate screen to order </p>
							<p> up to four tiles! </p>
						</> :
						<>
							<p> rotate back! </p>
							<p> to complete your order </p>
						</>
					}
					<ScreenRotationIcon className={classes.rotateIcon}/>
				</>}
			</div>

			<Grid
				className={classes.grid}
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={4}>
				{matches ?
					getTilesGridItems( [ 1, 2, 3, 4 ] ):
					getTilesGridItems( [ 1 ] )}
			</Grid>

			{isMobile ?
				( !matches && getTilesOrderForm() ) :
				getTilesOrderForm()}
		</div>
	);
};

ImagesWall.propTypes = {
	user: PropTypes.object.isRequired,
};

const mapStateToProps = function ( state ) {
	return {
		user: state.user
	};
};

export default connect( mapStateToProps )( ImagesWall ) ;
