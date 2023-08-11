#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js';       //configuracion del servidor
import debug from 'debug';      //modulo de debugeo
import http from 'http';        //modulo para crear servidores HTTP
import { connect } from 'mongoose';

/**
 * Get port from environment and store in Express.
 */

// PORT
//process.env guarda las configuraciones de las variables de entorno
//se configuran con un modulo que se llama DOTENV
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
// START SERVING
let server = http.createServer(app);  //creo un servidor normalizado con HTTP
let ready = () => {
  console.log('server ready on port '+port)
  //connect('link de conexion de mongo')
  connect(process.env.MONGO) //devuelve una promesa
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))
}

server.listen(port, ready);           //con el metodo listen escucho el puerto para que empiece a funcionar (a levantarse)
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
