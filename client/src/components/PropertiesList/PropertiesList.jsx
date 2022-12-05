import { Col, Row } from "react-bootstrap"
import PropertyCard from "../PropertyCard/PropertyCard"

const PropertyList = ({ property }) => {

  return (
    <Row>
      {property.map(elm => {
        return (
          <Col sm={{ span: 4 }} key={elm._id} >
            <PropertyCard {...elm} />
          </Col>
        )
      })}
    </Row>
  )
}

export default PropertyList