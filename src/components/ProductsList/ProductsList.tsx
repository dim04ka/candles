
import { useState } from 'react'
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

import Logo from '../../images/logo.webp'
import lineImg from '../../images/line.webp'
import flagRu from '../../images/flag_ru.png'
import flagEn from '../../images/flag_en.png'
import flagGe from '../../images/flag_ge.png'
import { useTranslation } from 'react-i18next';

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

const FlagRu = styled.img`
  width: 30px;
  height: 25px;
`
const ButtonFlag = styled.button`
border: none;
    background: transparent;
`


export const ProductsList = () => {

  const data: Product[] = useAppSelector((state) => state.products.products)
  const [language, setLanguage] = useState('ru')
  const { t, i18n } = useTranslation();

  const handleClick = (language: string): void => {
    i18n.changeLanguage(language)
    setLanguage(language)
    localStorage.setItem('language', language)
  };
  return (
    <div>
      <Box pt={2}>
        {
          language !== 'ru' && <ButtonFlag onClick={() => handleClick('ru')}><FlagRu src={flagRu} /></ButtonFlag>
        }
        {
          language !== 'en' && <ButtonFlag onClick={() => handleClick('en')}><FlagRu src={flagEn} /></ButtonFlag>
        }
        {
          language !== 'ge' && <ButtonFlag onClick={() => handleClick('ge')}><FlagRu src={flagGe} /></ButtonFlag>
        }



      </Box>
      <Box pt={5}>
        <a href="/" style={{ position: 'relative' }}>
          <img style={{ width: 200 }} src={Logo} alt="logo" />
          <img src={lineImg} className="logo" alt="Свечи" />
          <img src={lineImg} className="logo2" alt="Свечи" />
        </a>
      </Box>
      <Animate classNames="animate" timeout={500}>
        <h1>{t('h1')}</h1>
      </Animate>
      <Box pt={5} pb={5} justifyItems="center" alignItems="center" >
        <Animate classNames="animate animate-right" timeout={500}>
          <Typography variant="subtitle1" component="h2" style={{ maxWidth: 700, margin: '0 auto' }}>
            {t('we_create')}
          </Typography>
        </Animate>

        <Animate classNames="animate" timeout={500}>
          <Typography variant="subtitle1" component="h6" style={{ maxWidth: 900, margin: '0 auto' }}>
            {t('all_candles')}
          </Typography>
        </Animate>

        <Animate classNames="animate animate-right" timeout={500}>
          <Typography variant="subtitle1" component="h6" style={{ maxWidth: 600, margin: '0 auto' }}>
            {t('only_natural')}
          </Typography>
        </Animate>
      </Box>

      <Container>
        <Backet />
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
      </Container>


      <Animate classNames="animate-down-to-up" timeout={500}>
        <Box pt={5} justifyItems="center" alignItems="center" >
          <Typography variant="subtitle1" component="h6" style={{ maxWidth: 500, margin: '0 auto', marginBottom: 50 }}>
            {t('any_question')}

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

