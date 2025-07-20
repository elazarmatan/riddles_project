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
    await db.collection('riddles').deleteOne({ _id: new ObjectId(id) });
}

export async function updateRiddle(property,newValue,id) {
    await db.collection('riddles').updateOne({ _id: new ObjectId(id) }, { $set: {[property]: newValue} } );
}

export async function getRiddlesByLevel(specficLevel) {
    const level = await db.collection('riddles').find({difficulty:specficLevel}).toArray();
    return level
}


export async function getRiddlesById(id) {
    const counter = await db.collection('riddles').find({_id:new ObjectId(id)}).toArray();
    return counter
}
// const r = await getAllRiddle()
// console.log(r)
// createRiddle({name:"david",level:'easy'})
// await deleteRiddle('687c8da2ef1f18b44119d2b0')
// const level = await getRiddlesByLevel("easy")
// console.log(level)
// await updateRiddle('name','moshe','687c8de4046a44f5fc145ac8')