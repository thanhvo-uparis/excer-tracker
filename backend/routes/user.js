const express = require('express');
const router = express.Router();
let User = require('../models/exercise.model');

/*
router.route("/").get((request, response) => {
    response.send("success to router user!!")
});

module.exports = router;
*/

router.route("/").get((request, response) => {
    User.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
})

module.exports = router;
