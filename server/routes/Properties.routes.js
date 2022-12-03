const router = require("express").Router()
const Property = require('./../models/Property.model')

router.get("/getAllProperties", (req, res) => {

  Property
    .find()
    .select({ title: 1, imageUrl: [] })
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => res.status(500).json(err))
})


router.get("/getOneProperty/:property_id", (req, res, next) => {

  const { property_id } = req.params

  Property
    .findById(property_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})


router.post("/saveProperty", (req, res) => {

  Property
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

module.exports = router