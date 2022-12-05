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
    image: [''],
    description: '',
    city: '',
    price: '',
    category: '',
    extras: { pool: null, barbaque: null, terrace: null, wifi: null, airconditioning: null }
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setPropertyData({ ...propertyData, [name]: value })
  }
  const handleSwitchChange = e => {
    const { name, checked } = e.target
    setPropertyData({ ...propertyData, [name]: checked })
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

              <Form.Group className=" mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  name="image"
                  value={image}
                  onChange={handleInputChange}

                />
              </Form.Group>

            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
              </Form.Group>
            </Col>
          </Row>



          <Row>
            <Col>

              <Form.Check onChange={handleSwitchChange}
                name="pool"
                type="switch"
                id="custom-switch"
                label="Piscina"
              />

              <Form.Check onChange={handleSwitchChange}
                name="barbaque"
                type="switch"
                id="custom-switch"
                label="Barbacoa"
              />

              <Form.Check onChange={handleSwitchChange}
                name="terrace"
                type="switch"
                id="custom-switch"
                label="Terraza"
              />

              <Form.Check onChange={handleSwitchChange}
                name="wifi"
                type="switch"
                id="custom-switch"
                label="Wifi"
              />

              <Form.Check onChange={handleSwitchChange}
                name="airconditioning"
                type="switch"
                id="custom-switch"
                label="Aire acondicionado"
              />

            </Col>
          </Row>


          <div className="d-grid mb-5">
            <Button variant="dark" type="submit">Crear Casa</Button>
          </div>

        </Form>
      </Container>
    </>
  )
}

export default NewPropertyForm