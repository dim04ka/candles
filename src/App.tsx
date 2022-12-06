import React from 'react';

import './App.css';
import { ProductsList } from './components/ProductsList';
import { Product } from './components/Product';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { Box } from '@mui/material'

import { useAppSelector } from './hooks'
import Modal from './modal'
import Animate from './hocs/animate'






const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    errorElement: <Navigate to="/" />
  },
  {
    path: "about",
    element: <div>About</div>,
    errorElement: <Navigate to="/" />
  },
  {
    path: "product/:id",
    element: <Product />,
    errorElement: <Navigate to="/" />
  },
]);


const Logo = () => {
  console.log('Logo')
  return (
    <>
      <Animate classNames="svechi" timeout={10}>
        <span>SVECHI</span>
      </Animate>
      <Animate classNames="block-logo" timeout={10}>
        <span>BLOCK</span>
      </Animate>
      <Animate classNames="doma" timeout={10}>
        <span>DOMA</span>
      </Animate>
    </>
  )
}

function App() {

  const state = useAppSelector((state) => state)

  return (

    <div className="App">
      {/* <Box pt={5}>
        <Logo />
      </Box> */}

      {
        state.modal.isShow && <Modal />
      }
      <RouterProvider router={router} />


    </div>

  );
}

export default App;
