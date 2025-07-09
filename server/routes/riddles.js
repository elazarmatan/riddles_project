import express from 'express'
import {read} from '../../DAL/read.js'
import {create} from '../../DAL/create.js'

const router = express.Router()

// router.put('/update')
router.post('/create',async(req,res) => {
    const data = await read('../server/db/riddle.txt')
    try{
    create('../server/db/riddle.txt',data,req.body)
    res.end('succes')
    }catch(err){
        res.status(400)
        res.end
    }
})
router.get('/getall',async(req,res) => {
    const data = await read('../server/db/riddle.txt')
    res.json(data)
})
// router.delete('/delete')

export default router