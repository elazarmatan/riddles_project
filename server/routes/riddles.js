import express from 'express'
import { read } from '../../DAL/read.js'
import { create } from '../../DAL/create.js'
import { update } from '../../DAL/update.js'


const router = express.Router()

router.put('/update:id', async (req, res) => {
    const data = await read('../server/db/riddle.txt')
    try {
        await update('../server/db/riddle.txt', req.body.changes, data,req.params.id,req.body.property)
        res.end('succes')
    } catch (err) {
        console.error(' Error during update:', err)
        res.status(400)
        res.end('eror')
    }
})
router.post('/create', async (req, res) => {
    const data = await read('../server/db/riddle.txt')
    const id = (data[data.length - 1]).id
    req.body.id = id + 1
    try {
        await create('../server/db/riddle.txt', data, req.body)
        res.end('succes')
    } catch (err) {
        res.status(400)
        res.end("eror")
    }
})
router.get('/getall', async (req, res) => {
    const data = await read('../server/db/riddle.txt')
    res.json(data)
})
// router.delete('/delete')

export default router