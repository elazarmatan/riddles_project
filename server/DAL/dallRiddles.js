import "dotenv/config"
import { mongoClient } from '../db/mongoDb.js'
import { ObjectId } from 'mongodb'

const db = mongoClient.db('riddle_project')

export async function createRiddle(riddle) {
    await db.collection('riddles').insertOne(riddle)
}

export async function getAllRiddle() {
    const data = await db.collection('riddles').find().toArray()
    return data
}

export async function deleteRiddle(id) {
    await db.collection('riddles').deleteOne({ riddle_id: parseInt(id) });
}

export async function updateRiddle(property, newValue, id) {
    try {
        const result = await db.collection('riddles').updateOne({ riddle_id: parseInt(id) }, { $set: { [property]: newValue } });
        if (result.matchedCount === 0) {
            console.warn("No document matched the query.");
        } else {
            console.log(" Updated successfully.");
        }
    }
    catch (err) {
        console.error('error', err)
    }
}

export async function updateCounter(property, newValue, id) {
    try {
        await db.collection('riddles').updateOne({ _id: new ObjectId(id) }, { $set: { [property]: newValue } });
        console.log('succes')
    }
    catch (err) {
        console.error('error', err)
    }

}

export async function getRiddlesByLevel(specficLevel) {
    const level = await db.collection('riddles').find({ difficulty: specficLevel }).toArray();
    return level
}


export async function getRiddlesById(id) {
    const counter = await db.collection('riddles').find({ _id: new ObjectId(id) }).toArray();
    return counter
}