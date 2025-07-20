import "dotenv/config"
import { mongoClient } from '../db/mongoDb.js'

const db = mongoClient.db('riddle_project')

export async function createRiddle(riddle) {
    await db.collection('riddles').insertOne(riddle)
}

export async function getAllRiddle() {

}

export async function deleteRiddle() {

}

export async function updateRiddle() {

}

export async function getRiddlesByLevel() {

}
