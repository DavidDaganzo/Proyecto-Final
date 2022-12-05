import './PropertyCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function PropertyCard({ name, image, price, _id }) {
  return (
    <Card className="mb-4 PropertyCard">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €/noche</Card.Text>
        <Link to={`/detalles/${_id}`}>
          <div className="d-grid">
            <Button variant="dark" size="sm">Ver detalles</Button>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PropertyCard;