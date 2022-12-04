import styled from "styled-components"

export const CardStyle = styled.div`
heigth: 300px;

transition: .3s;
& img {
  transition: .3s;
}
&:hover img{
  
  transform: scale(1.1);
}

@media(max-width: 900px){
  &:hover img{
  
    transform: none;
  }
}
  
`

export const CardBody = styled.div`
padding: 20px 0;
`

export const CardTitle = styled.div`
margin-bottom: 10px;
font-size: 20px;
`
