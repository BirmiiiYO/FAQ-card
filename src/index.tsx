import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

fetch('https://iis.bsuir.by/api/v1/employees/schedule/s-nesterenkov')
  .then(response => response.json())
  .then(data => console.log(data));

root.render(
  <Provider store={store}>
    <App /></Provider>
);
