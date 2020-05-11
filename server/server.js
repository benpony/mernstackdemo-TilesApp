const express = require( "express" );
const bodyParser= require( "body-parser" );
const app = express();
const MongoClient = require( "mongodb" ).MongoClient;
const _dbUser = "root";
const _dbPassword = "secretpassword";
const connectionString =  `mongodb+srv://${_dbUser}:${_dbPassword}@cluster0-zy0ho.mongodb.net/test?retryWrites=true&w=majority`;

// Make sure you place body-parser before your CRUD handlers!
app.use( bodyParser.urlencoded( { extended: true, limit: "50mb" } ) );
app.use( bodyParser.json( { limit: "50mb" } ) );

( async () => {
	const client = await MongoClient.connect( connectionString,{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	} );
	const db = client.db( "images_wall" ); 

	app.get( "/orders", async ( req, res ) => {
		try {
			const user = await db.collection( "users" )
				.find( { uuid: req.query.uuid } )
				.toArray();

			res.json( { 
				orders : user && user.length ? user[0].orders : []
			} ) ;
		} catch ( e ){
			console.error ( e );
		}		
	} );

	app.post( "/order", async ( req, res ) => {
		try {	
			let user = await db.collection( "users" ).findOneAndUpdate( 
				{ uuid: req.body.uuid  },
				{ $addToSet: { orders: req.body.order }  },
				{ returnNewDocument :true }
			);
			
			if( !user.value ){
				user = await db.collection( "users" ).insertOne( { 
					uuid: req.body.uuid,
					orders: [ req.body.order ]  } );
			}

			res.json( {
				message:"Successfully created new order" 
			} );
		} catch ( e ){
			console.error ( e );
		}
	} ); 

	app.get( "/allOrders", async ( req, res ) => {
		try {
			if( req.query.pwd === "mixtilesadmin" ){
				const users = await db.collection( "users" )
					.find( )
					.toArray();

				res.json( { 
					users : users
				} ) ;
			}
		} catch ( e ){
			console.error ( e );
		}		
	} );
 
	app.listen( 3000, console.log( "listening on 3000" ) );
} )().catch( console.error );
