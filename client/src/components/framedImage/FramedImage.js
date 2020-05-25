import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Frame from "../../assets/white-frame.svg";
import UploadImage from "../uploadImage/UploadImage";
import "./FramedImage.scss";

export default function FramedImage( { isSelected, imageNumber, image, callback, onFrameClick } ) {
	const backspaceLongPress = useLongPress( ()=> { onFrameClick( imageNumber ); }, 1000 );

	return (
		<div className="framedImageComponent">
			<div className={isSelected ? "tile" : "tile unselected animated"}>
				<div className="preview">
					{image ?
						<img
							src={image.location ? image.location : image.dataURL}
							className="image"
							alt=""/>
						: <UploadImage
							imageNumber={imageNumber}
							callback={callback}/>
					}
				</div>
				<div className="tileFrame">
					{isSelected && (
						<img
							className="frame"
							onDoubleClick={() => {onFrameClick( imageNumber );}}
							{...backspaceLongPress}
							src={Frame}/>
					)}
				</div>
			</div>
		</div>
	);
}

FramedImage.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	imageNumber: PropTypes.number.isRequired,
	image: PropTypes.object,
	callback: PropTypes.func,
	onFrameClick: PropTypes.func
};


function useLongPress( callback = () => {}, ms = 300 ) {
	const [ startLongPress, setStartLongPress ] = useState( false );

	useEffect( () => {
		let timerId;
		if ( startLongPress ) {
			timerId = setTimeout( callback, ms );
		} else {
			clearTimeout( timerId );
		}

		return () => { clearTimeout( timerId );};
	}, [ callback, ms, startLongPress ] );

	return {
		onMouseDown: () => setStartLongPress( true ),
		onMouseUp: () => setStartLongPress( false ),
		onMouseLeave: () => setStartLongPress( false ),
		onTouchStart: () => setStartLongPress( true ),
		onTouchEnd: () => setStartLongPress( false ),
	};
}
