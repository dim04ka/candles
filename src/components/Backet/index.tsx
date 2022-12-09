import { useAppSelector } from '../../hooks'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useDispatch } from 'react-redux'
import { displayModal } from '../../store/modal'
import styled from 'styled-components'

const AmountPrice = styled.div`
transition: .3s;
    opacity: 0;
    position: absolute;
    top: 22px;
    left: -100px;
    background: black;
    padding: 5px 15px;
    color: white;
    border-radius: 5px;

    &:after {
      content: '';
      width: 15px;
    height: 15px;
    background: black;
    position: absolute;
    top: 10px;
    right: -5px;
    transform: rotate(45deg);
    }
`

const Basket = styled.div`
  z-index: 9;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 100px;
    right: 50px;
    background: white;
    transition: .3s;
    &:hover {
      cursor: pointer;
      ${AmountPrice} {
        opacity: 1;
      }
    }

    &:hover svg{
      transform: scale(1.2);
    }

    & svg {
      transition: .3s;
      width: 40px;
      height: 40px;
    }

    @media(max-width: 900px) {
      right: 10px;
    }
`

const CountProducts = styled.div`
width: 30px;
    height: 30px;
    background: red;
    position: absolute;
    bottom: -10px;
    right: -5px;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Backet = () => {
  const state = useAppSelector((state) => state)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(displayModal({ isShow: true }))
  }
  return (
    <>
      {
        !!state.orders.orders.length && (
          <Basket onClick={handleClick} title={'Bucket'}>
            <ShoppingBasketIcon />
            <CountProducts>{state.orders.orders.length}</CountProducts>
            <AmountPrice>= {state.orders.amount} ₾</AmountPrice>
          </Basket>
        )
      }
    </>

  )
}
