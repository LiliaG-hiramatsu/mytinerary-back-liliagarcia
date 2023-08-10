import express from 'express';
import userRouter from './users.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.use('/users', userRouter)
// router.use acepta como min dos param para poder enrutar
//1- la palabra con la que se va a enrutar
//2- el enrutador que tengo que conectar
export default router;
