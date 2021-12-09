const express = require('express');
const router = express.Router();

let User = require('../models/user.model');

router.route("/").get((request, response) => {
        User.find()
            .then(user => response.json(user))
            .catch(err => response.status(400).json("Error: " + err))
});

router.route("/add").post((request, response) => {
    const username = request.body.username;
    const newUser = User({
        username
    });

    newUser.save()
        .then(() => response.json("successfully added username!"))
        .catch(err => response.status(400).json("Error: " + err))
})

module.exports = router;