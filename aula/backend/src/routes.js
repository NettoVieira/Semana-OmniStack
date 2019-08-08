const express = require('express')
const devController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')



const routes = express.Router()

routes.get('/devs', devController.index)

routes.post('/devs', devController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routes

//sempre que usar uma requisção do tipo post sempre mandaremos a requisição utilizando JSON 