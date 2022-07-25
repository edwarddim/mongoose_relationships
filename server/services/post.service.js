const Post = require("../models/post.model")

module.exports.create = async (data) => {
    try {
        const newPost = Post.create(data)
        return newPost
    } catch (error) {
        return error
    }
}

module.exports.getOne = async (post_id) => {
    try {
        const onePost = await 
        Post.findOne({_id:post_id})
            // .populate("creator") // Inserts the Relationship Data
            // .populate("creator", "name") // Grabs just the name
            .populate({path:"creator" , select:['name', 'createdAt']}) // Select which attributes you want to grab
        return onePost
    } catch (error) {
        return error
    }
}

module.exports.getAll = async () => {
    try {
        const allPosts = await Post.find().populate("creator")
        return allPosts
    } catch (error) {
        return error
    }
}

module.exports.update = async (post_id, data) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(post_id, data)
        return updatedPost
    } catch (error) {
        return error
    }
}

module.exports.delete = async (post_id) => {
    try {
        const confirmation = await Post.deleteOne({_id:post_id})
        return confirmation
    } catch (error) {
        return error
    }
}