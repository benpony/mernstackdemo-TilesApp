import * as React from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/Button";
import "./UploadImage.scss";
 
const maxNumber = 10;
const maxMbFileSize = 5;
class UploadImage extends React.Component {

  onChange = (imageList) => {
    console.log(imageList);
    this.props.callback(this.props.imageNumber, imageList);
  };
 
  render() {
    return (
      <ImageUploading
        onChange={this.onChange}
        maxNumber={maxNumber}
        multiple={false}
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png","jpeg"]}>
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          <div>
            {!imageList.length ? 
              <Button
                className="actions"
                variant="outlined"
                color="primary"
                onClick={onImageUpload}>
                  Upload image
              </Button> : 
              undefined
            }

            {imageList.map((image) => (
              <div key={image.key}>
                <img 
                  src={image.dataURL} 
                  className="inner-image" />
                <Button
                  className="actions"
                  variant="outlined"
                  color="primary"
                  onClick={image.onUpdate}>
                    Update
                </Button>
                <Button
                  className="actions"
                  variant="outlined"
                  color="secondary"
                  onClick={image.onRemove}>
                    Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    );
  }
}
UploadImage.propTypes = {};

export default UploadImage;
