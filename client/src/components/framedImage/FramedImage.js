import React from "react";
import PropTypes from "prop-types";
import Frame from "../../assets/white-frame.svg";
import UploadImage from "../uploadImage/UploadImage";
import "./FramedImage.scss";

export default function FramedImage( { isSelected, imageNumber, image, callback } ) {
	return (
		<div className="framedImageComponent">
			<div className={isSelected ? "tile" : "tile unselected animated"}>
				<div className="preview">
					{image ?
						<img
							src={image.location}
							className="image"
							alt=""/>
						: <UploadImage
							imageNumber={imageNumber}
							callback={callback}/>
					}
				</div>
				<div className="tileFrame">
					{isSelected ? (
						<img
							className="frame"
							onClick={( e ) => {e.preventDefault(); e.stopPropagation();}}
							src={Frame}/>
					) : undefined}
				</div>
			</div>
		</div>
	);
}

FramedImage.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	imageNumber: PropTypes.number.isRequired,
	image: PropTypes.object,
	callback: PropTypes.func
};
