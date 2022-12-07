import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import propertiesService from "../../services/Properties.service"

const PropertyDetailsPage = () => {

    const [properties, setProperties] = useState()
    const { property_id } = useParams()


    useEffect(() => {
        propertiesService
            .getOneProperty(property_id)
            .then(({ data }) => setProperties(data))
            .catch(err => console.error(err))
    }, [])

    const deleteProperty = () => {
        propertiesService
            .delete(property_id)
            .then(({ data }) => setProperties(data))
            .catch(err => console.error(err))
    }




    return (

        <Container>

            {

                !properties
                    ?

                    < h1 > CARGANDO</h1>
                    :
                    <>
                        <h1 className="mb-4">Detalles de {properties.name}</h1>
                        <hr />

                        <Row>
                            <Col md={{ span: 4 }}>
                                <img src={properties.image} style={{ width: '100%' }} />
                                {/* {properties.image.array.forEach(element => {
                                    <img src={element} style={{ width: '100%' }} />
                                });} */}
                            </Col>
                            <Col md={{ span: 6, offset: 1 }}>
                                <h3>Especificaciones</h3>
                                <p>{properties.description}</p>
                                <ul>
                                    <li>Capacidad: {properties.capacity} personas</li>
                                    <li>Precio por noche: {properties.price}€</li>
                                </ul>
                                <hr />

                                <Link to="/properties">
                                    <Button as="div" variant="outline-dark" className='me-2'>Volver a la Lista</Button>
                                </Link>
                                <Link to="/properties">
                                    <Button variant="outline-danger" onClick={deleteProperty}>Eliminar</Button>
                                </Link>
                            </Col>


                        </Row>
                    </>
            }


        </Container >
    )
}

export default PropertyDetailsPage