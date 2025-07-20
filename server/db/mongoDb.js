import { MongoClient } from 'mongodb';


export const mongoClient = new MongoClient('mongodb+srv://testing:elazar123@cluster0.zimetry.mongodb.net/');

export async function connectToMongoDB() {
    try {
        await mongoClient.connect();
        console.log('Connected to MongoDB');
    } catch(error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}

