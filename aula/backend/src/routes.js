const express = require('express')
const devController = require('./controllers/DevController')


const routes = express.Router()

routes.post('/devs', devController.store)

module.exports = routes

//sempre que usar uma requisção do tipo post sempre mandaremos a requisição utilizando JSON 