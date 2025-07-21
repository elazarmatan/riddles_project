import express from 'express'
import { createRiddle ,updateRiddle,deleteRiddle,getAllRiddle,getRiddlesByLevel,getRiddlesById, updateCounter} from '../DAL/dallRiddles.js'




const router = express.Router()

router.put('/update/:id', async (req, res) => {
    try {
        await updateRiddle(req.body.property,req.body.changes,req.params.id)
        res.json({ msg: 'succes' })
    } catch (err) {
        console.error(' Error during update:', err)
        res.status(400)
        res.json({ msg: 'eror' })
    }
})

router.post('/create', async (req, res) => {
    const id = await getRiddlesById('687cac7422a52d221c8b84a1')
    const riddleId = parseInt(id[0].counter)+ 1;
    req.body.riddle_id = riddleId
    await updateCounter('counter',riddleId,'687cac7422a52d221c8b84a1')
    try {
        await createRiddle(req.body)
        res.json({ msg: 'succes' })
    } catch (err) {
        res.status(400)
        res.json({ msg: 'error' })
    }
})

router.get('/getall', async (req, res) => {
    try {
        const data = await getAllRiddle()
        res.json(data)
    }
    catch (err) {
        res.status(400)
        res.end(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
       await deleteRiddle(req.params.id)
        res.json({ msg: 'succes' })
    }
    catch (err) {
        res.status(400)
        res.end(err)
    }
})

router.get('/getByLevel/:level', async (req, res) => {
    try {
        const data = await getRiddlesByLevel(req.params.level)
        res.json(data)
    }
    catch (err) {
        res.status(400)
        res.end(err)
    }
})

export default router