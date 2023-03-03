import { useEffect } from 'react';

import './App.css';
import { ProductsList } from './components/ProductsList';
import { Product } from './components/Product';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import { Box } from '@mui/material'

import { useAppSelector } from './hooks'
import Modal from './modal'
import { initLocalStorage } from './utils'
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    errorElement: <Navigate to="/" />
  },
  {
    path: "admin",
    element: <div>Admin panel</div>,
    errorElement: <Navigate to="/admin" />
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
    <>
    <div className="info">🔥 Наш новый сайт | Our new site 😊 <a href="https://www.candles.digital">candles.digital</a></div>
      <HelmetProvider>
        <div className="App">

          {
            state.modal.isShow && <Modal />
          }
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>

    </>
  );
}

export default App;
