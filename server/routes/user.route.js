const UesrController = require("../controllers/user.controller")

module.exports = app => {
    app.get("/api/users/test", UesrController.test)
    app.post("/api/users", UesrController.create)
    app.get("/api/users/:user_id", UesrController.findOne)
    app.get("/api/users", UesrController.findAll)
}