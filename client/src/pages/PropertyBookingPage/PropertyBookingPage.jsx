import BookingCalendar from '../../components/BookingCaledar/BookingCalendar'
import React, { useState } from "react";
import { addDays } from "date-fns";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from "react-bootstrap"
import BookingService from '../../services/Booking.service'

const PropertyBookingPage = () => {
  const { property_id } = useParams()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
      bookedProperty: property_id,
      // bookedBy: 
    }
  ]);

  const navigate = useNavigate()

  const handleFormSubmit = e => {
    e.preventDefault()
    BookingService
      .saveBooking(state)
      .then(() => {
        navigate('/properties')
      })
      .catch(err => console.log(err))

  }


  return (
    <div>
      <BookingCalendar state={state} setState={setState} />

      <Link to="/properties">
        <Button variant="outline-danger" className='me-3 mb-4 mt-2' onClick={handleFormSubmit}>Reservar</Button>
      </Link>
    </div>
  )
}
export default PropertyBookingPage