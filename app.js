import 'dotenv/config.js'        
//import './config/database.js'                   //importo unicamente la conf de las variables de entorno. Tiene que estar arriba de todo
import __dirname from './utils.js';                 //importo la conf de la ubic del servidor
//const createError = require('http-errors');
import createError from 'http-errors';              //crear errores
//const express = require('express');
import express from 'express';                      //provee metodos y propiedades para levantar servidores
//const path = require('path');
import path from 'path';                        //provee la ruta principal de nuestro servidor
//const cookieParser = require('cookie-parser');    //manejo de cookies
//const logger = require('morgan');
import logger from 'morgan';                        //para registrar cada una de las peticiones
//const indexRouter = require('./routes/index');
import indexRouter from './routes/index.js';          //solo vamos a configurar las rutas del enrutador de back principal
                                                    //este enrutador va a llamar a todos los otros recursos (cities, intenenaries, etc.)
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors'                             //modulo para desbloquear las politicas de CORS (origenes cruzados: server del front 5173 y del back 8080)

let app = express();                                //ejecutando el modulo de express, creo una app de backend (servidor)

// view engine setup - configuracion del motor de vistas
//SET es el metodo necesario para setear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES son funciones
//USE es el metodo necesario para obligar a mi app a que use la funcion cada vez que se realiza una peticion/solicitud
app.use(logger('dev'));                                   //obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json());                                  //obligo alservidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));         //obliga al servidor a leer params(:)/queries(?)
//app.use(cookieParser());
app.use(cors())                                           // obligo al servidor a desbloquear las politicas de cors (pq el front y el back tienen diferentes puertos)
app.use(express.static(path.join(__dirname, 'public')));  //obligo al servidor a usar los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);                             //obligo al servidor a que use las rutas del enrutador principal con "/api" para diferenciar la ruta del front

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app
