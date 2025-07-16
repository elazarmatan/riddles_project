import express from 'express'
import { read } from '../DAL/read.js'
import { create } from '../DAL/create.js'
import { update } from '../DAL/update.js'
import { Delete } from '../DAL/delete.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const riddlesDbPath = path.join(__dirname, '../server/db/riddle.txt')

const router = express.Router()
// const path = '../server/db/riddle.txt'
router.put('/update/:id', async (req, res) => {
    const data = await read(riddlesDbPath)
    const idx = data.findIndex(riddle => riddle.id === parseInt(req.params.id))
    try {
        await update(riddlesDbPath, req.body.changes, data, idx, req.body.property)
        res.json({ msg: 'succes' })
    } catch (err) {
        console.error(' Error during update:', err)
        res.status(400)
        res.json({msg:'eror'})
    }
})

router.post('/create', async (req, res) => {
    const data = await read(riddlesDbPath)
    const id = (data[data.length - 1]).id
    req.body.id = id + 1
    try {
        await create(riddlesDbPath, data, req.body)
        res.json({msg:'succes'})
    } catch (err) {
        res.status(400)
        res.end("eror")
    }
})

router.get('/getall', async (req, res) => {
    const data = await read(riddlesDbPath)
    res.json(data)
})

router.delete('/delete/:id',async(req,res) =>{
    const data = await read(riddlesDbPath)
    const idx = data.findIndex(riddle => riddle.id === parseInt(req.params.id))
    await Delete(riddlesDbPath,idx,data)
    res.end()
})

export default router