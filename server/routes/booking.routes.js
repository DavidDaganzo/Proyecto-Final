const router = require("express").Router()
const Booking = require('../models/Booking.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')


router.post("/saveBook", isAuthenticated, (req, res, next) => {

    const { entranceDate, exitDate, reservedProperty } = req.body
    console.log(req.body)
    Booking
        .create({ entranceDate, exitDate, resevedBy: req.payload._id, reservedProperty })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post('/delete/:booking_id', (req, res, next) => {

    const { booking_id } = req.params

    Booking
        .findByIdAndDelete(booking_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get('/:property_id', (req, res, next) => {
    const { property_id } = req.params

    Booking
        .find({ reservedProperty: property_id })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
