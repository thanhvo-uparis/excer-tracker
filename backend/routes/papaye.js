const express = require('express');
const router = express.Router();

let Papaye = require('../models/papaye.model');

router.route("/").get((request, response) => {
    Papaye.find()
            .then(papaye => response.json(papaye))
            .catch(err => response.status(400).json("Error: " + err))
});

router.route("/add").post((request, response) => {
    const name = request.body.name;
    const description = request.body.description;
    const type = request.body.type;
    const store = request.body.store;

    const newPapaye = new Papaye(
        {
            name,
            description,
            type,
            store
        }
    );

    newPapaye.save()
        .then(() => response.json("successfully added papaye!"))
        .catch(err => response.status(400).json("Error: " + err))
})

module.exports = router;