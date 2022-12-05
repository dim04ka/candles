import React from 'react';
import logo from './logo.svg';
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

import { useAppSelector } from './hooks'
import Modal from './modal'




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
