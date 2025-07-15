import express from 'express'
import { read } from '../DAL/read.js'
import { create } from '../DAL/create.js'
import { update } from '../DAL/update.js'
import { Delete } from '../DAL/delete.js'

const router = express.Router()

router.put('/update/:id', async (req, res) => {
    const data = await read('../db/riddle.txt')
    const idx = data.findIndex(riddle => riddle.id === parseInt(req.params.id))
    try {
        await update('../db/riddle.txt', req.body.changes, data, idx, req.body.property)
        res.json({ msg: 'succes' })
    } catch (err) {
        console.error(' Error during update:', err)
        res.status(400)
        res.end('eror')
    }
})

router.post('/create', async (req, res) => {
    const data = await read('../db/riddle.txt')
    const id = (data[data.length - 1]).id
    req.body.id = id + 1
    try {
        await create('../db/riddle.txt', data, req.body)
        res.end('succes')
    } catch (err) {
        res.status(400)
        res.end("eror")
    }
})

router.get('/getall', async (req, res) => {
    const data = await read('../db/riddle.txt')
    res.json(data)
})

router.delete('/delete/:id',async(req,res) =>{
    const data = await read('../db/riddle.txt')
    const idx = data.findIndex(riddle => riddle.id === parseInt(req.params.id))
    await Delete('../db/riddle.txt',idx,data)
    res.end()
})

export default router