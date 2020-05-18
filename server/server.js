const express = require( "express" );
const bodyParser= require( "body-parser" );
const app = express();

( async () => {
	app.use( bodyParser.urlencoded( { extended: true, limit: "50mb" } ) );
	app.use( bodyParser.json( { limit: "50mb" } ) );
	app.use( express.static( "public" ) );

	// Mongo
	const MongoClient = require( "mongodb" ).MongoClient;
	const _dbUser = "root";
	const _dbPassword = "secretpassword";
	const connectionString =  `mongodb+srv://${_dbUser}:${_dbPassword}@cluster0-zy0ho.mongodb.net/test?retryWrites=true&w=majority`;
	const client = await MongoClient.connect( connectionString,{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	} );
	exports.db = client.db( "images_wall" );

	// S3
	const AWS = require( "aws-sdk" );
	const bluebird = require( "bluebird" ); 
	const _s3bucket = "images-wall";
	const _awsAccesssKeyId = "AKIAJWIRHE6TIHA6HKPQ";
	const _awsSecretAccessKey = "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";
	AWS.config.update( {
		accessKeyId: _awsAccesssKeyId,
		secretAccessKey: _awsSecretAccessKey
	} );
	AWS.config.setPromisesDependency( bluebird );
	exports.s3Bucket = new AWS.S3( { params: { Bucket: _s3bucket } } );

	app.get( "/orders", require ( "./api/controllers/user/get" ).getUser );

	app.post( "/order", require ( "./api/controllers/user/post" ).createOrder ); 

	app.get( "/allOrders", require ( "./api/controllers/user/getList" ).getUsers );
 
	app.listen( 9000, console.log( "listening on 9000" ) );
} )().catch( console.error );
