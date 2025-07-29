import express from 'express'
import routerRiddle from './routes/riddles.js'
import routerplayer from './routes/players.js'
import { connectToMongoDB } from './db/mongoDb.js'
import 'dotenv/config'

const server = express()


server.use(express.json())

server.use('/riddle', routerRiddle)
server.use('/player', routerplayer)

await connectToMongoDB()

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))