import express from 'express'
import create from '../controllers/itineraries/create.js'
import read from '../controllers/itineraries/read.js'
import readOne from '../controllers/itineraries/readOne.js'
import update from '../controllers/itineraries/update.js'
import destroy from '../controllers/itineraries/destroy.js'

let router = express.Router()

//CREATE
router.post('/', create)

//READ
router.get('/', read)

//READONE
router.get('/:id', readOne)

//UPDATE
router.put('/:id', update)

//DELETE
router.delete('/:id', destroy)

export default router