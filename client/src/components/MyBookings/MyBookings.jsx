import { Container, Col, Row } from "react-bootstrap"
const MyBookings = ({ bookings }) => {

  console.log(bookings)
  return (
    <Container>
      <Row>

        {bookings && bookings.map(elm => {
          return (
            <Col xs={12} md={6} lg={4} key={elm._id} className='mb-4' >

              {/* <p>esta es tu reserva : {elm._id}</p> */}
              <p>{elm.bookedProperty.name}</p>
              <p>{elm.startDate}</p>
              <p>{elm.endDate}</p>

            </Col>
          )
        })}
      </Row>
    </Container >
  )
}

export default MyBookings