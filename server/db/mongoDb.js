import { MongoClient } from 'mongodb';


export const mongoClient = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
    try {
        await mongoClient.connect();
        console.log('Connected to MongoDB');
    } catch(error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}

