import React from 'react'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import propertiesService from "../../services/Properties.service"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"



const NewPropertyForm = () => {


  const [propertyData, setPropertyData] = useState({
    name: '',
    capacity: 0,
    location: { lat: '', lng: '' },
    image: '',
    description: '',
    city: '',
    price: '',
    category: '',
    extras: { pool: '', barbaque: '', terrace: '', wifi: '', airconditioning: '' }
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setPropertyData({ ...propertyData, [name]: value })
  }

  const navigate = useNavigate()

  const handleFormSubmit = e => {
    e.preventDefault()

    propertiesService
      .saveProperty(propertyData)
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err))
  }

  const { name, capacity, location: { lat, lng }, image, description, city, price, category, extras: { pool, barbaque, terrace, wifi, airconditioning } } = propertyData




  return (
    <>

      <Container>
        <h1>Crear nuevo alojamiento</h1>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Select className="mb-3" aria-label="category" name='category'>
                <option>Categoría</option>
                <option value="House">Apartamento</option>
                <option value="Hotel">Hotel</option>
                <option value="Villa">Chalet</option>
                <option value="Capsule-Hotel">Hotel cápsula</option>
              </Form.Select  >
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="capacity">
                <Form.Label>Capacidad </Form.Label>
                <Form.Control type="number" value={capacity} onChange={handleInputChange} name="capacity" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" value={city} onChange={handleInputChange} name="city" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="lat">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="number" value={lat} onChange={handleInputChange} name="lat" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lng">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="number" value={lng} onChange={handleInputChange} name="lng" />
              </Form.Group>
            </Col>
          </Row>


          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="text" value={image} onChange={handleInputChange} name="image" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
              </Form.Group>
            </Col>
          </Row>



          {/* <Row>
            <Col>

              <Form.Select className="mb-3" aria-label="pool" name='pool'>
                <option>piscina</option>
                <option value="true">Tiene</option>
                <option value="false">No tiene</option>
              </Form.Select >

              <Form.Select className="mb-3" aria-label="barbaque" name='barbaque'>
                <option>Barbacoa</option>
                <option value="true">Tiene</option>
                <option value="false">No tiene</option>
              </Form.Select>

              <Form.Select className="mb-3" aria-label="terrace" name='terrace'>
                <option>Terraza</option>
                <option value="true">Tiene</option>
                <option value="false">No tiene</option>
              </Form.Select  >

              <Form.Select className="mb-3" aria-label="wifi" name='wifi'>
                <option>Conexion Wifi</option>
                <option value="true">Tiene</option>
                <option value="false">No tiene</option>
              </Form.Select>

              <Form.Select className="mb-3" aria-label="airconditioning" name='airconditioning'>
                <option>Aire acondicionado</option>
                <option value="true">Tiene</option>
                <option value="false">No tiene</option>
              </Form.Select>
            </Col>
          </Row> */}


          <div className="d-grid mb-5">
            <Button variant="dark" type="submit">Crear montaña rusa</Button>
          </div>

        </Form>
      </Container>
    </>
  )
}

export default NewPropertyForm