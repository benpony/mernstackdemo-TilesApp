import { v4 as uuidv4 } from "uuid";

export default {
	user:{
		uuid: uuidv4(),
		order: {
			uuid:null,
			name:null,
			date: null,
			email:null,
			address:null,
			images:[]
		},
	},
	orders: [],
	admin:{
		adminPassword:null,
		users: []
	}
};
