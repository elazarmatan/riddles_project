import express from 'express'
import { getAllPlayers, create, checkIfPlayerExist, update } from '../DAL/dalPlayers.js'

const router = express.Router()

router.get('/getall', async (req, res) => {
    const data = await getAllPlayers()
    res.json(data)
})
router.post('/create', async (req, res) => {
    try {
        await create(req.body)
        res.json({ msg: 'succes' })
    } catch (err) {
        console.error(' Error during creation:', err)
        res.status(400)
        res.json({ msg: 'Error during creation' })
    }
})
router.put('/update/:name', async (req, res) => {
    
    try {
        await update(req.params.name, req.body.property, req.body.time)
        res.json({ msg: "succes" })
    } catch (err) {
        console.error(' Error during update:', err)
        res.status(400)
        res.json({ msg: JSON.stringify(err) })
    }
})

router.get('/getByName/:name', async (req, res) => {
    try {
        const response = await checkIfPlayerExist(req.params.name)
        res.json(response)
    }
    catch (err) {
        res.status(400)
        res.end('eror')
    }
})

export default router