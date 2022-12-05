
import { ProductsListItem } from '../ProductsListItem'
import { Container, Row, Col } from 'react-bootstrap';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LazyLoad from 'react-lazy-load';

import { useAppSelector } from '../../hooks'
import styled from 'styled-components'

import { Product } from '../../types'
import { Backet } from '../Backet'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import Logo from '../../logo.png'

const Wrapper = styled.ul`
display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;

    & svg {
      width: 50px;
      height: 50px;
      fill: black;

      &:hover {
        fill: #414040;
      }
    }
`

export const LinkStyle = styled.div`
  margin-bottom: 40px;

  @media(max-width: 900px) {
    width: 100%
  }
`;

export const ProductsList = () => {

  const data: Product[] = useAppSelector((state) => state.products.products)

  return <div>
    <Box pt={5}>
      <a href="/"> <img style={{ width: 200 }} src={Logo} alt="logo" /></a>
    </Box>
    <Box pt={5} pb={5} justifyItems="center" alignItems="center" >
      <Typography variant="subtitle1" component="h6" style={{ maxWidth: 700, margin: '0 auto' }}>
        Мы создаем не просто свечи, мы создаем настроение!

      </Typography>
      <Typography variant="subtitle1" component="h6" style={{ maxWidth: 900, margin: '0 auto' }}>
        Все свечи, представленные в нашем магазине, не содержат парафин, свинец, бензол  и иных небезопасных веществ.</Typography>
      <Typography variant="subtitle1" component="h6" style={{ maxWidth: 600, margin: '0 auto' }}>
        Только натуральные ингредиенты, безопасные для всей семьи.
      </Typography>
    </Box>

    <Container>
      <Backet />
      <Row style={{ justifyContent: 'center' }}>
        {
          data.map((el: Product) => {
            return (
              <LazyLoad height={500} width={400} key={el.id}>
                <LinkStyle key={el.id}>
                  <Link to={`product/${el.id}`} style={{ textDecoration: 'none', color: 'black', fontFamily: 'TildaSans, Arial, sans-serif' }}>
                    <Col >
                      <ProductsListItem {...el} />
                    </Col>
                  </Link>
                </LinkStyle>
              </LazyLoad>
            )
          })
        }
      </Row>
    </Container>
    <Box pt={5} justifyItems="center" alignItems="center" >
      <Typography variant="subtitle1" component="h6" style={{ maxWidth: 500, margin: '0 auto', marginBottom: 50 }}>
        По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в соцсетях.
      </Typography>
      <Wrapper>
        <li>
          <a target="_blank" href="https://www.instagram.com/svechi_domage/" rel="noreferrer">
            <InstagramIcon />
          </a>
        </li>
        <Box width='50' />
        <li>
          <a target="_blank" href="https://www.facebook.com/groups/500515668595017" rel="noreferrer">
            <FacebookIcon />
          </a>
        </li>

      </Wrapper>
    </Box>
  </div>

}

