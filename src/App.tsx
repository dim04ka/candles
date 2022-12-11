import { useEffect } from 'react';

import './App.css';
import { ProductsList } from './components/ProductsList';
import { Product } from './components/Product';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Box } from '@mui/material'

import { useAppSelector } from './hooks'
import Modal from './modal'
import { initLocalStorage } from './utils'


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

function App() {
  const state = useAppSelector((state) => state)

  useEffect(() => {
    initLocalStorage()
  }, [])

  return (

    <div className="App">
      {
        state.modal.isShow && <Modal />
      }
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
