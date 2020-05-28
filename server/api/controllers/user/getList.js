const db = require( "../../../server" ).db;

exports.getUsers = async ( req, res ) => {
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
};
