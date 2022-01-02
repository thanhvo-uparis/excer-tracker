const express = require('express');
const router = express.Router();

let Store = require('../models/store.model');

router.route("/").get((request, response) => {
    Store.find()
            .then(store => response.json(store))
            .catch(err => response.status(400).json("Error: " + err))
});

router.route("/add").post((request, response) => {
    const name = request.body.name;
    const address = request.body.address;
    const country = request.body.country;
    const newStore = Store({
        name,
        address,
        country
    });

    newStore.save().then(
        () => response.json("added store!")
    ).catch(err => response.status(400).json("Error: " + err))
})

module.exports = router;