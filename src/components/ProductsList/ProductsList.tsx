

import Animate from '../../hocs/animate'

import { ProductsListItem } from '../ProductsListItem'
import { Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import { useAppSelector } from '../../hooks'
import styled from 'styled-components'

import { Product } from '../../types'
import { Backet } from '../Backet'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import Logo from '../../logo.png'
import lineImg from '../../images/line.webp'


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
  margin-bottom: 30px;
`;

const Item = styled.div`
  width: 33%;

  @media(max-width: 900px) {
    width: 50%
  }

`




export const ProductsList = () => {

  const data: Product[] = useAppSelector((state) => state.products.products)


  return (
    <div>

      <Box pt={5}>
        <a href="/" style={{ position: 'relative' }}>
          <img style={{ width: 200 }} src={Logo} alt="logo" />
          <img src={lineImg} className="logo" alt="Свечи" />
          <img src={lineImg} className="logo2" alt="Свечи" />
        </a>
      </Box>
      <Animate classNames="animate" timeout={500}>
        <h1>Свечи ручной работы Тбилиси Грузия</h1>
      </Animate>
      <Box pt={5} pb={5} justifyItems="center" alignItems="center" >
        {/* <Animate classNames="animate" timeout={400}> */}
        <Typography variant="subtitle1" component="h2" style={{ maxWidth: 700, margin: '0 auto' }}>
          Мы создаем не просто свечи, мы создаем настроение!
        </Typography>
        {/* </Animate> */}

        {/* <Animate classNames="animate" timeout={300}> */}
        <Typography variant="subtitle1" component="h6" style={{ maxWidth: 900, margin: '0 auto' }}>
          Все свечи, представленные в нашем магазине, не содержат парафин, свинец, бензол  и иных небезопасных веществ.
        </Typography>
        {/* </Animate> */}

        {/* <Animate classNames="animate" timeout={200}> */}
        <Typography variant="subtitle1" component="h6" style={{ maxWidth: 600, margin: '0 auto' }}>
          Только натуральные ингредиенты, безопасные для всей семьи.
        </Typography>
        {/* </Animate> */}
      </Box>

      <Container>
        <Backet />
        <Animate classNames="animate-down-to-up" timeout={500}>
          <Row style={{ justifyContent: 'center' }}>
            {
              data.map((el: Product) => {
                return (
                  <Item key={el.id}>
                    <LinkStyle key={el.id}>
                      <Link to={`product/${el.id}`} style={{ textDecoration: 'none', color: 'black', fontFamily: 'TildaSans, Arial, sans-serif' }}>

                        <ProductsListItem {...el} />

                      </Link>
                    </LinkStyle>
                  </Item>
                )
              })
            }
          </Row>
        </Animate>
      </Container>


      <Animate classNames="animate-down-to-up" timeout={500}>
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
      </Animate>



    </div>
  )


}

