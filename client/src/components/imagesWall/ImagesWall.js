import React, { useState } from "react";
import { useStyles } from "./imagesWallStyle";
import { connect } from "react-redux";
import { userChanged } from "../../actions/userActions";
import { createUserOrder } from "../../actions/orderActions";
import { v4 as uuidv4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FramedImage from "../framedImage/FramedImage";
import OrderForm from "../orderForm/OrderForm";

const ImagesWall = ( { user, dispatch, history } ) => {
	const classes = useStyles();
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
		user.order = {
			uuid: uuidv4(),
			name: user.order.name,
			address: user.order.address,
			images
		};
		dispatch( createUserOrder( user ) );
		setTimeout( ()=>{history.push( "/orders" );}, 4000 );
	};

	const isItemsSelected = array => Array.isArray( array ) && array.length;
	const isOrderComplete = images => isItemsSelected( images ) && user.order.address;

	return (
		<div className={classes.root}>
			<div className={classes.center}>
				<Grid
					className={classes.grid}
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={4}>
					{[ 1, 2, 3, 4 ].map( ( val, index ) => (
						<Grid
							key={index}
							item xs={12} sm={6}>
							<FramedImage
								imageNumber={index}
								callback={imageSelectionChanged}
								isSelected={images[index]}/>
						</Grid>
					) )}
				</Grid>

				<OrderForm/>

				<Button
					className={classes.button}
					variant="outlined"
					color="primary"
					onClick={submitOrder}
					disabled={!isOrderComplete( images )}>
					Order
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = function ( state ) {
	return {
		user: state.user
	};
};

export default connect( mapStateToProps )( ImagesWall ) ;
