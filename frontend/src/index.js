import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AdminProvider from './Context/AdminProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AdminProvider>
      <App />
    </AdminProvider>
  </BrowserRouter>
);
