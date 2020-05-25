import React from "react";
import PropTypes from "prop-types";
import "./ImagesCounter.scss";

const ImagesCounter = ( { images } ) => {
	return (
		<div className="ImagesCounter">
			{
				`${images
					.map( image => image && image.dataURL ? true: false )
					.filter( img => img ).length} / 4`
			}
		</div>
	);
};
ImagesCounter.propTypes = {
	images: PropTypes.array
};

export default ImagesCounter;
