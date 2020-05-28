const express = require( "express" );
const bodyParser= require( "body-parser" );
const app = express();
const secrets = require( "./secrets" );

( async () => {
	app.use( bodyParser.urlencoded( { extended: true, limit: "50mb" } ) );
	app.use( bodyParser.json( { limit: "50mb" } ) );
	app.use( express.static( "public" ) );

	// Mongo
	const MongoClient = require( "mongodb" ).MongoClient;
	const connectionString =  `mongodb+srv://${process.env._dbUser || secrets._dbUser}:${process.env._dbPassword || secrets._dbPassword}@cluster0-zy0ho.mongodb.net/test?retryWrites=true&w=majority`;
	const client = await MongoClient.connect( connectionString,{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true,
	} );
	exports.db = client.db( "images_wall" );

	// S3
	const AWS = require( "aws-sdk" );
	const bluebird = require( "bluebird" ); 
	AWS.config.update( {
		accessKeyId: process.env._awsAccesssKeyId || secrets._awsAccesssKeyId,
		secretAccessKey: process.env._awsSecretAccessKey || secrets._awsSecretAccessKey
	} );
	AWS.config.setPromisesDependency( bluebird );
	exports.s3Bucket = new AWS.S3( { params: { Bucket: process.env._s3bucket || secrets._s3bucket } } );

	app.get( "/orders", require ( "./api/controllers/user/get" ).getUser );

	app.post( "/order", require ( "./api/controllers/user/post" ).createOrder ); 

	app.get( "/allOrders", require ( "./api/controllers/user/getList" ).getUsers );
 
	const server = app.listen( process.env.PORT || 5000, function () {
		const port = server.address().port;
		console.log( `Express is working on port : ${port}` );
	} );
} )().catch( console.error );
