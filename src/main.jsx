import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '/routes/home';
import Produits from '/routes/products';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/produits">PProduits</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produits" element={<Produits />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </>
  </React.StrictMode>
);
