const UserService = require("../services/user.service")

module.exports.test = (req, res) => {
    res.json("TEST")
}

module.exports.create = async (req,res) => {
    try{
        const newUser = await UserService.create(req.body)
        return res.json(newUser)
    }
    catch(error){
        res.json(error)
    }
}

module.exports.findOne = async (req,res) => {
    try{
        const oneUser = await UserService.findOne(req.params.user_id)
        return res.json(oneUser)
    }
    catch(error){
        res.json(error)
    }
}

module.exports.findAll = async (req, res) => {
    try{
        const allUsers = await UserService.getAll()
        return res.json(allUsers)
    }
    catch(error){
        return res.json(error)
    }
}