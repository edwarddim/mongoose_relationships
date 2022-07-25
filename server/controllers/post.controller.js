const PostService = require("../services/post.service")

module.exports.create = async (req, res) => {
    try {
        const newPost = await PostService.create(req.body)
        return res.json(newPost)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.getOne = async (req, res) => {
    try {
        const onePost = await PostService.getOne(req.params.post_id)

        return res.json(onePost)
    } catch (error) {
        return res.json(error)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const allPosts = await PostService.getAll()
        return res.json(allPosts)
    } catch (error) {
        return res.json(error)
    }
}

module.exports.update = async (req, res) => {
    try {
        const updatedPost = await PostService.update(req.params.post_id, req.body)
        return res.json(updatedPost)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports.delete = async (req, res) => {
    try {
        const confirmation = await PostService.delete(req.params.post_id)
        return res.json(confirmation)
    } catch (error) {
        return res.json(error)
    }
}