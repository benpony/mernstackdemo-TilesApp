import React from "react";
import "./FramedImage.scss";
import Frame from "../../assets/white.svg";
import UploadImage from "../uploadImage/UploadImage";

export default function FramedImage( { isSelected, imageNumber, callback } ) {
	return (
		<div className="framedImageComponent">
			<div className={isSelected ? "tile" : "tile unselected animated"}>
				<div className="preview">
					<UploadImage
						imageNumber={imageNumber}
						callback={callback}/>
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
