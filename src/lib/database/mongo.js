import { MongoClient } from "mongodb";
export async function connectToCluster() {
	let mongoClient;

	try {
		mongoClient = new MongoClient("mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/");
		console.log('Connecting to MongoDB Atlas cluster...');
		await mongoClient.connect();
		console.log('Successfully connected to MongoDB Atlas!');
		return mongoClient;
	} catch (error) {
		console.error('Connection to MongoDB Atlas failed!', error);
		process.exit();
	}
}
let mongoClient = await connectToCluster();
export const formDB = mongoClient.db('rinn_data');
export const user_data = formDB.collection('user_data');
export const broker_data = formDB.collection('broker_data');
export const controller_data = formDB.collection('controller_data');
export const admin_data = formDB.collection('admin_data');
export const super_user = formDB.collection('super_user');
