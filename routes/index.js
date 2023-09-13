import express from 'express';
import usersRouter from './users.js'
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import activitiesRouter from './activities.js'
import authRouter from './auth.js';
import likesRouter from './likes.js';
import commentsRouter from './comments.js';

let router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});


router.use('/users', usersRouter)
// router.use acepta como min dos param para poder enrutar
//1- la palabra con la que se va a enrutar
//2- el enrutador que tengo que conectar

router.use('/cities', citiesRouter)

router.use('/itineraries', itinerariesRouter)

router.use('/activities', activitiesRouter)

router.use('/auth', authRouter)

router.use('/likes', likesRouter)

router.use('/comments', commentsRouter)

export default router;
