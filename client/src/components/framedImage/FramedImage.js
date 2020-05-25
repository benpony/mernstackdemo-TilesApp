import React from "react";
import PropTypes from "prop-types";
import Frame from "../../assets/white-frame.svg";
import UploadImage from "../uploadImage/UploadImage";
import { useLongPress } from "../index";
import "./FramedImage.scss";

const FramedImage = ( { isSelected, imageNumber, image, callback, onFrameClick } ) => {
	const longPressProps = useLongPress( {
		onLongPress:() => onFrameClick( imageNumber ),
		ms:2000
	} );

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
							{...longPressProps }
							src={Frame}/>
					)}
				</div>
			</div>
		</div>
	);
};

FramedImage.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	imageNumber: PropTypes.number.isRequired,
	image: PropTypes.object,
	callback: PropTypes.func,
	onFrameClick: PropTypes.func
};

export default FramedImage;
