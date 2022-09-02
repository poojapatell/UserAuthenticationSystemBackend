const controller = require("../controllers/userdetails.controller");
module.exports = function(app) {
    app.get(
        "/api/userdetails/findAllUsers",
        controller.findAllUsers
    );
};