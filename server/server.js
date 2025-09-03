import express from 'express'
import routerRiddle from './routes/riddles.js'
import routerplayer from './routes/players.js'
import { connectToMongoDB } from './db/mongoDb.js'
import 'dotenv/config'
import cors from "cors";


const server = express()

server.use((req,res,next) => {
    console.log(`method ${req.method} url ${req.url}`)
    next()
})
server.use(cors({ origin: "http://localhost:5173" }));

server.use(express.json())

server.use('/riddle', routerRiddle)
server.use('/player', routerplayer)

await connectToMongoDB()

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))