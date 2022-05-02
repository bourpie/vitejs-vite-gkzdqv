import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Produits from './Pages/Products';
import Article from './Pages/Article';
import AddArticle from './Pages/AddArticle';
import MyNavbar from './Components/MyNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';

import './index.scss';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyNavbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="article/:slug" element={<Article />} />
            <Route path="ecrire" element={<AddArticle />} />
            <Route path="produits" element={<Produits />} />
          </Routes>
        </main>
        <footer></footer>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
