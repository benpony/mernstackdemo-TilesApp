const db = require( "../../../server" ).db;

exports.getUser = async ( req, res ) => {
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
};
