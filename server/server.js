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

const allowedOrigins = [
  'http://localhost:5173',
  'https://riddleselazar.netlify.app'
];

server.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); 
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true 
}));

server.use(express.json())

server.use('/riddle', routerRiddle)
server.use('/player', routerplayer)

await connectToMongoDB()

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))