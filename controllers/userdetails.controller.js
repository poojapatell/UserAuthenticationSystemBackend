const db = require("../models");
const User = db.user;

exports.findAllUsers = (req, res) => {
    User.findAll()
    .then(data => {
    if (!data) {
        return res.status(404).send("Not Found");
    }
    else{
        return res.status(200).send(message);
    }
    })
    .catch(err => {
        res.status(500).send(err);
    });
};