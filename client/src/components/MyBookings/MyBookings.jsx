import { Container, Col, Row, Card } from "react-bootstrap"
import MyCarousel from "../PropertyCard/MyCarousel"
const MyBookings = ({ bookings }) => {

  console.log(bookings)
  return (
    <Container>
      <Row>

        {bookings && bookings.map(elm => {
          return (
            <Col xs={12} md={6} lg={4} key={elm._id} className='mb-4' >
              <Card style={{ width: '21rem' }}>
                <Card.Title className="text-center">{elm.bookedProperty.name}</Card.Title>
                <hr />
                <p>Id de la reserva: {elm._id}</p>
                <p>Precio de la reserva: {elm.bookingAmount}€</p>
                <p>Fecha de entrada: {elm.startDate.slice(0, -14)}</p>
                <p>Fecha de salida: {elm.endDate.slice(0, -14)}</p>
                <MyCarousel arrayOfImage={elm.bookedProperty.image} />
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container >


  )
}

export default MyBookings