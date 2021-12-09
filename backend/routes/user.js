const express = require('express');

const router = express.Router();

/*
router.route.get("/", (request, response) => {
        response.send("success to router exercise!")
});

export default router;
*/

let User = require('../models/exercise.model');

router.route("/").get((request, response) => {
    User.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
})

module.exports = router;