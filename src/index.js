import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {  AuthProvider } from "./context/AuthContext.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/web-site-multihogar'> 
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  
);

