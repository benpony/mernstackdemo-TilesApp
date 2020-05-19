import * as React from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import "./UploadImage.scss";
 
const maxNumber = 10;
const maxMbFileSize = 5;
class UploadImage extends React.Component {

  onChange = (imageList) => {
    this.props.callback(this.props.imageNumber, imageList);
  };

  render() {
    return (
      <ImageUploading
        onChange={this.onChange}
        maxNumber={maxNumber}
        multiple={false}
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png","jpeg"]}
        defaultValue={[]}>
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          <>
            {!imageList.length ? 
              <Button
                className="add-action"
                variant="outlined"
                color="primary"
                onClick={onImageUpload}>
                  <AddIcon className="add-icon">
                    add
                  </AddIcon>
              </Button> : 
              undefined
            }

            {imageList.map((image) => (
              <div key={image.key}>
                <img 
                  src={image.dataURL} 
                  className="image"
                  alt=""
                  onClick={image.onUpdate}/>
              </div>
            ))}
          </>
        )}
      </ImageUploading>
    );
  }
}
UploadImage.propTypes = {};

export default UploadImage;
