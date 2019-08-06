const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ message: `Ola ${req.query.name}` })
})

routes.post('/devs', (req, res) =>{
  return res.json({ ok: true })
})

module.exports = routes