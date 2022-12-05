const router = require("express").Router()
const Property = require('./../models/Property.model')

router.get("/getAllProperties", (req, res) => {

  Property
    .find()
    .select({ name: 1, image: 1, capacity: 1, price: 1 })
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
  const { name, capacity, lat, lng, image, description, city, price, category, extras: { pool, barbaque, terrace, wifi, airconditioning } } = req.body

  const location = {
    type: 'Point',
    coordinates: [lat, lng]
  }
  Property
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})



router.post('/edit/:property_id', (req, res) => {

  const { property_id } = req.params

  Property
    .findByIdAndUpdate(property_id, req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

router.post('/delete/property_id/', (req, res) => {

  const { property_id } = req.params

  Property
    .findByIdAndDelete(property_id)
    .then(response => res.json(response))
    .catch(err => console.log(err))

})

module.exports = router