import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produits from '/routes/products';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <nav></nav>
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="produits" element={<Produits />} />
      </Routes>
    </BrowserRouter>
    </main>
    <footer></footer>
    </>
  </React.StrictMode>
);
