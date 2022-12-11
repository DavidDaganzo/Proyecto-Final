const router = require("express").Router()
const Booking = require('../models/Booking.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')


router.post("/saveBook", isAuthenticated, (req, res, next) => {
    console.log(req.body)
    const [reserva] = req.body
    console.log(reserva)
    const { startDate, endDate, bookedProperty } = reserva


    Booking
        .create({ startDate, endDate, bookedBy: req.payload._id, bookedProperty })
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
        .find({ bookedProperty: property_id })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
