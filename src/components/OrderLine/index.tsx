import { useDispatch } from 'react-redux';
import { increase, deсrease, remove } from '../../store/orders'
import { Product } from '../../types'
import { useAppSelector } from '../../hooks'
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & button {
    transition: .3s;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    opacity: .3;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
    }
  }
`

export const Image = styled.img`
  width: 70px;
  border-radius: 10px;
`

export const Title = styled.div`
flex: 1;
padding: 0 10px;
font-weight: bold;
`
export const TotalCount = styled.div`
  padding: 0 10px;
`

export const Price = styled.div`
padding-left: 10px;
  flex-basis: 100px;
    text-align: center;
`
const WrapperOrder = styled.div`
flex: 1;
  display: flex;
  align-items: center;

  @media(max-width: 900px){
    flex-wrap: wrap;
    padding: 0 10px;
  }
`

const BoxOne = styled.div`
width: 50%;
@media(max-width: 900px){
  width: 100%;
    margin-bottom: 10px;
}
`
const BoxTwo = styled.div`
display: flex;
margin-left: auto;
    margin-right: 20px;

@media(max-width: 900px){
  width: 100%;
  display: flex;
}
`

interface OrderLineProps {
  id: number;
  count: number;
  children?: React.ReactNode;

}

const OrderLine = ({ id, count }: OrderLineProps) => {
  const dispatch = useDispatch()

  const products = useAppSelector((state) => state.products.products)

  const increaseHandle = () => {
    dispatch(increase({ id: Number(id) }))
  }

  const deсreaseHandle = () => {
    dispatch(deсrease({ id: Number(id) }))
  }

  const removeHandle = () => {
    dispatch(remove({ id: Number(id) }))
  }

  const getPrice = useMemo(() => {
    const result = products.filter(el => el.id === id)
    const order: Product = result[0]

    return +order.price * count
  }, [products, count, id])

  const { photo, title } = products.filter(el => el.id === id)[0]

  return (
    <Wrapper>
      <Image src={photo} />
      <WrapperOrder>
        <BoxOne>
          <Title>{title}</Title>
        </BoxOne>
        <BoxTwo>
          <button onClick={deсreaseHandle}>-</button>
          <TotalCount>{count}</TotalCount>
          <button onClick={increaseHandle}>+</button>

          <Price>{getPrice} gel</Price>
        </BoxTwo>
      </WrapperOrder>
      <button onClick={removeHandle}>X</button>

    </Wrapper>
  )

}

export default OrderLine