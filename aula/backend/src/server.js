const express = require('express')
const routes = require('./routes')

const server = express()


/**
 * metodos que utilizamos dentro de uma api são:
 * GET, POST, PUT, DELETE
 */
server.use(routes)

server.listen(3333)