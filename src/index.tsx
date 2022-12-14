import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'
import { Provider } from 'react-redux'
import './translate/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
