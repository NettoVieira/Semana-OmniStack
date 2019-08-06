const express = require('express')

const server = express()

/**
 * metodos que utilizamos dentro de uma api são:
 * GET, POST, PUT, DELETE
 */
server.get('/', (req, res) => {
  return res.json({ message: `Ola ${req.query.name}` })
})
server.listen(3333)