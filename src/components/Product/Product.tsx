import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

import { useAppSelector } from '../../hooks'
import { Product as ProductType } from '../../types'
import { useEffect } from 'react'
import Modal from '../../modal'
import { useDispatch } from 'react-redux';
import { increase } from '../../store/orders'
import Arrow from './image/arrow.png'
import CloseIcon from './image/closeIcon.png'
import { Helmet } from 'react-helmet-async';
import { displayModal } from '../../store/modal'
import Animate from '../../hocs/animate'

const bounceAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const Block = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const Wrapper = styled.div`
  display: flex;

  @media(max-width: 900px){
    flex-direction: column;
  }
`
const ReturnBlock = styled(Link)`
width: 200px;
height: 100vh;
padding-top: 50px;
cursor: pointer;
color: black;
text-decoration: none;

&:hover {
  transition: .3s;
  background: #b5a3a330;

}

@media(max-width: 900px){
  height: 60px;
  width: 100%;
  position: fixed;
  background: white;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-top: 10px;

  &:hover {
    transition: .3s;
    background: white;
  
  }
}
  
`
const MainBlock = styled.div`
display: flex;
flex-grow: 1;
padding-top: 150px;
gap: 20px;
text-align: left;

@media(max-width: 900px){
  padding: 10px;
    flex-direction: column;
}
`
const ArrowStyle = styled.img`
  width: 40px;
  margin-right: 10px;
`
const PhotoStyle = styled.div`
flex: 1;
margin-right: 50px;

& img {
  width: 300px
}

@media(max-width: 900px){
  width: 100%;
  & img {
    width: 100%;
  }
}



`
const ContentStyle = styled.div`
  flex: 2;
  padding-right: 20px;
`
const TitleStyle = styled.div`
  font-family: TildaSans, Arial, sans-serif;
  font-size: 22px;
  margin-bottom: 10px;
`
const PriceStyle = styled.div`
margin-bottom: 10px;
`
const DescriptionStyle = styled.div`
  font-size: 12px;
 
`

const ButtonStyle = styled.button`
  margin: 20px 0 30px;
  background: black;
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 14px;
`
// const CloseButtonOne = styled.img.attrs({
//   src: CloseIcon,
// })

// export const CloseButton = styled(CloseButtonOne)`
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   position: absolute;
//   top: 0;
//   right: 0;
// `


const PhotoGalery = styled.div`
  padding-top: 10px;

  & img {
    object-fit: cover;
    object-position: center center;
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  & img:hover {
    cursor: pointer;
  }
`

interface IsActiveProps {
  isActive: boolean;
}

const Image = styled.img`
  box-shadow: ${({ isActive }: IsActiveProps) => isActive ? '1px 1px 5px black' : 'none'} ;
`

export const Product = () => {
  let { id } = useParams();
  const data = useAppSelector((state) => state.products.products)

  const [activeImage, setActiveImage] = useState('')
  const [product] = data.filter((el: ProductType) => el.id === Number(id))

  const dispatch = useDispatch()


  const handleClick = () => {

    dispatch(increase({ id: Number(id) }))
    dispatch(displayModal({ isShow: true }))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const handleActiveImage = (image: string) => {
    setActiveImage(image)
  }

  useEffect(() => {
    setActiveImage(product.photo[0])
  }, [])

  const contentString = `${product.title} ${product.description}`

  return (
    // <BouncyDiv>
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name='description' content={contentString} />
      </Helmet>


      <Wrapper>
        <ReturnBlock to="/" >
          <ArrowStyle src={Arrow} alt="arrow" />
          <span>Все товары</span>
        </ReturnBlock>
        <MainBlock>
          <Animate classNames="animate-photo" timeout={500}>
            <PhotoStyle>
              <img src={activeImage} alt={product.title} />
            </PhotoStyle>
            <PhotoGalery>
              {
                product.photo.length > 1 && product.photo.map(image => {
                  return (

                    <Image
                      src={image}
                      alt={image}
                      key={image}
                      onClick={() => handleActiveImage(image)}
                      isActive={activeImage === image}
                    />

                  )
                })
              }
            </PhotoGalery>
          </Animate>
          <Animate classNames="animate-left-right" timeout={500}>
            <ContentStyle>
              <TitleStyle>{product.title}</TitleStyle>
              <PriceStyle>{product.price} ₾</PriceStyle>

              <ButtonStyle onClick={handleClick}>Добавить в корзину</ButtonStyle>

              <DescriptionStyle>{product.description}</DescriptionStyle>
            </ContentStyle>
          </Animate>


          {/* <Link to="/" src={CloseIcon} role={CloseButton} /> */}

        </MainBlock>
      </Wrapper>
    </>

  )
}