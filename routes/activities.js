import express from 'express'
import create from '../controllers/activities/create.js'
import read from '../controllers/activities/read.js'
import readOne from '../controllers/activities/readOne.js'
import update from '../controllers/activities/update.js'
import destroy from '../controllers/activities/destroy.js'

let router = express.Router()

//CREATE
router.post('/', create)

//READ
router.get('/', read)

//READONE
router.get('/:Activity_id', readOne)

//UPDATE
router.put('/:u_id', update)

//DELETE
router.delete('/:id', destroy)

export default router