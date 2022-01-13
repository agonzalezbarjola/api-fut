const express = require("express");
const router = express.Router();
const futSchema = require('../models/fut.model');

router.route('/fut').get((req, res) => {
    futSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})


router.post('/fut', (req, res, next) => {
    const futbolista = new futSchema({
        name: req.body.name,
        team: req.body.team,
        age: req.body.age,
        
    });
    futbolista.save().then((response) => {
        res.status(201).json({
            message: "player successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;