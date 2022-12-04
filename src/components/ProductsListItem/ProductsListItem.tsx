import { Card } from 'react-bootstrap';
import { CardBody, CardStyle, CardTitle } from './ProductsListItem.style';
import { Product } from '../../types'

export const ProductsListItem = ({ title, description, photo, price }: Product) => {
  return (
    <>
      <CardStyle>
        <div style={{ height: 280, overflow: 'hidden' }}>
          <Card.Img variant="top" src={photo} style={{ height: '100%', width: 'auto' }} />
        </div>
        <CardBody>
          <Card.Body>
            <CardTitle>{title}</CardTitle>
            <Card.Text>
              {price} gel
            </Card.Text>
          </Card.Body>
        </CardBody>
      </CardStyle>
    </>
  )
}