import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

//CREATE
router.post('/signup', create)

//READ
router.get('/', read)

//READONE
router.get('/:id', readOne)
//el parametro se debe llamar igual aca y en el controlador

//UPDATE
router.put('/:u_id', update)

//DELETE
router.delete('/:id', destroy)

export default router