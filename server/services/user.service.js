const User = require("../models/user.model")

module.exports.create = async (data) => {
    const newUser = await User.create(data)
    return newUser;
}

module.exports.getAll = async () => {
    return await User.find()
}

module.exports.getOne = async (id) => {
    return await User.findOne({_id:id})
}

