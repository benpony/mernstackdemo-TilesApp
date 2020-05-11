import React from "react";
import "./FramedImage.scss";
import Frame from "../../assets/black-frame.png";
import UploadImage from "../uploadImage/UploadImage";

export default function FramedImage( { imageNumber, callback } ) {
	return (
		<div className="framedImageComponent">
			<div className="framedImageContainer">
				<UploadImage
					imageNumber={imageNumber}
					callback={callback}/>

				<div className="frame"></div>
			</div>
		</div>
	);
}
