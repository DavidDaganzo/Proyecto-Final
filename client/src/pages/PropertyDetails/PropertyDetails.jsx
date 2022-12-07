import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import propertiesService from "../../services/Properties.service"
import MyCarousel from '../../components/PropertyCard/MyCarousel';
const PropertyDetailsPage = () => {

    const [properties, setProperties] = useState()
    const { property_id } = useParams()


    useEffect(() => {
        propertiesService
            .getOneProperty(property_id)
            .then(({ data }) => setProperties(data))
            .catch(err => console.error(err))
    }, [])

    const editProperty = () => {
        propertiesService
            .edit(property_id)
            .then(({ data }) => setProperties(data))
            .catch(err => console.error(err))
    }

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
                        <h1 className="mb-4 text-center mt-5">{properties.name}</h1>
                        <hr />

                        <Row>
                            <Col md={{ span: 5 }}>
                                <br />
                                <MyCarousel arrayOfImage={properties.image} />

                            </Col>
                            <Col md={{ span: 5, offset: 1 }}>

                                <h3 className='mb-2 mt-4'>Capacidad:</h3>
                                <p>{properties.capacity} personas</p>
                                <hr />
                                <h3>Precio por noche:</h3>
                                <p>{properties.price}€ </p>
                                <hr />
                                <h3>Ciudad: </h3>
                                <p>{properties.city}</p>
                                <hr />
                                <h3>Descripción:</h3>
                                <br />
                                <p>{properties.description}</p>
                                <hr />
                                <h3>Extras:</h3>
                                <ul>
                                    <li>Piscina: {properties.extras.pool ? '✅' : '❌'}</li>
                                    <li>Barbacoa: {properties.extras.barbaque ? '✅' : '❌'}</li>
                                    <li>Terraza: {properties.extras.terrace ? '✅' : '❌'}</li>
                                    <li>Wifi: {properties.extras.wifi ? '✅' : '❌'}</li>
                                    <li>Aire acondicionado: {properties.extras.airconditioning ? '✅' : '❌'}</li>
                                </ul>
                                <hr />

                                <Link to="/properties">
                                    <Button as="div" variant="outline-dark" className='me-3 mb-4 mt-2'>Volver a la Lista</Button>
                                </Link>
                                <Link to={`/edit/${property_id}`}>
                                    <Button variant="outline-warning" className='me-3 mb-4 mt-2' onClick={editProperty}>Editar</Button>
                                </Link>
                                <Link to="/properties">
                                    <Button variant="outline-danger" className='me-3 mb-4 mt-2' onClick={deleteProperty}>Eliminar</Button>
                                </Link>
                            </Col>


                        </Row>
                    </>
            }


        </Container >
    )
}

export default PropertyDetailsPage