const express = require('express');

const router = express.Router();

/*
router.route.get("/", (request, response) => {
        response.send("success to router exercise!")
});

export default router;
*/

let Exercise = require('../models/exercise.model');

router.route("/").get((request, response) => {
    Exercise.find()
    .then(exercise => response.json(exercise))
    .catch(err => response.status(400).json('Error: ' + err));
})

module.exports = router;