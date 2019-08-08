const axios = require('axios')
const Dev = require('../model/dev')
/**
 * O controller é onde toda a logica referente a alteração e todos os outros 
 * metodos deverão estar contidos
 */
module.exports = {
  async index(req, res) {
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: {$nin: loggedDev.likes } },
        { _id: {$nin: loggedDev.dislikes } },
      ],
    })

    return res.json(users)
  },
  async store(req, res) {
    const { username } = req.body // usando desestruturação
    
    const userExist = await Dev.findOne({ user: username })

    if(userExist){
      return res.json(userExist)
    }

    const response = await axios.get(`https://api.github.com/users/${username}`)

    const { name, bio, avatar_url: avatar } = response.data

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.json(dev)
  }
}