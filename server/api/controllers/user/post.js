const db = require( "../../../server" ).db;
const uploadBase64File = require( "../../index" ).uploadBase64File;

exports.createOrder = async( req, res ) => {
	try {	
		const reqUser = { ...req.body };
		reqUser.order.images = await Promise.all( 
			reqUser.order.images
				.map( async image  => {
					if( image && image.dataURL ){
						const  { Location, Key } = await uploadBase64File( image.dataURL );
						return { key:Key, location:Location };
					}
				} )
		);
		reqUser.order.images = reqUser.order.images
			.filter( el => el != undefined ); 
    
		let dbUser = await db.collection( "users" ).findOneAndUpdate( 
			{ uuid: reqUser.uuid  },
			{ $addToSet: { orders: reqUser.order }  },
			{ upsert: true, returnOriginal: false }
		);

		res.json( {
			message:"Successfully created new order",
			order: [ ...dbUser.value.orders ].pop()
		} );
	} catch ( e ){
		console.error ( e );
	}
};
