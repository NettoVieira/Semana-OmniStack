const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-emst5.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true
})
/**
 * metodos que utilizamos dentro de uma api são:
 * GET, POST, PUT, DELETE
 */
server.use(express.json())
server.use(routes)

server.listen(3333)