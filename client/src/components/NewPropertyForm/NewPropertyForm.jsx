import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import propertiesService from "../../services/Properties.service"




const NewPropertyForm = () => {


  const [propertyData, setPropertyData] = useState({
    name: '',
    capacity: 0,
    location: [],
    image: '',
    description: '',
    city: '',
    price: '',
    category: '',
    extras: {},
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setPropertyData({ ...propertyData, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    propertiesService
      .saveProperty(propertyData)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err))
  }

  const { name, capacity, location, image, description, city, price, category, extras } = propertyData




  return (
    <>
      <h1>Crear nuevo alojamiento</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
        </Form.Group>


        <Row>
          <Col>

            <Form.Group className="mb-3" controlId="inv">
              <Form.Label>Inversiones</Form.Label>
              <Form.Control type="number" value={inversions} onChange={handleInputChange} name="inversions" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="len">
              <Form.Label>Longitud</Form.Label>
              <Form.Control type="number" value={length} onChange={handleInputChange} name="length" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control type="url" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="dark" type="submit">Crear montaña rusa</Button>
        </div>
      </Form>
    </>
  )
}

export default NewPropertyForm