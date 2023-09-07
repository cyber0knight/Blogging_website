import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/auth';
import { PhotoProvider } from "./context/photo";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <PhotoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PhotoProvider>
    </AuthProvider>
);

