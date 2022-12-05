import { useState, useMemo, useCallback } from 'react'
import { Card } from 'react-bootstrap';
import { CardBody, CardStyle, CardTitle } from './ProductsListItem.style';
import { Product } from '../../types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled, { css } from 'styled-components'

export const styleImg = css`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px;
`

const Wrapper = styled.div`
    transition: all .3s;
    width: 100%;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    height: 338px;
    position: relative;

    & img {
      ${styleImg}
    }

    @media(max-width: 900px) {
      height: 200px;
    }
`

export const ProductsListItem = ({ title, description, photo, price }: Product) => {

  const [hover, setHover] = useState(false)

  const handleHover = () => setHover(true)

  const handleHoverLeave = () => setHover(false)

  const getUrlPhoto = useMemo(() => {
    return photo[hover ? 1 : 0] || photo[0]
  }, [hover, photo])

  return (
    <>
      <CardStyle>
        <Wrapper onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
          <LazyLoadImage src={getUrlPhoto} alt={description} />
        </Wrapper>
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