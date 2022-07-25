const PostController = require("../controllers/post.controller")

module.exports = app => {
    app.get("/api/posts", PostController.getAll)
    app.post("/api/posts", PostController.create)
    app.get("/api/posts/:post_id", PostController.getOne)
    app.put("/api/posts/:post_id", PostController.update)
    app.delete("/api/posts/:post_id", PostController.delete)
}