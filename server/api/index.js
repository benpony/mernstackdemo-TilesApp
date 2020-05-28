const { v4: uuidv4 } = require( "uuid" );
const s3Bucket = require( "../server" ).s3Bucket;

exports.uploadBase64File = async( imageBinary ) => {
	const buffer = new Buffer.from( 
		imageBinary.replace( /^data:image\/\w+;base64,/, "" ),"base64" 
	);
	const type = imageBinary.split( ";" )[0].split( "/" )[1];
	const data = {
		ACL: "public-read",
		Body: buffer,
		//Bucket:  "images-wall",
		Key: `${uuidv4()}.${type}`,
		ContentEncoding: "base64",
		ContentType: `image/${type}`,
	};
	return s3Bucket.upload( data ).promise();
};
