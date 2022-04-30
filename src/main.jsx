import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Produits from './routes/products';
import MyNavbar from './Components/MyNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './Reducers/CounterReducer';

import './index.scss';

const theme = createTheme();
const Store = createStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MyNavbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="produits" element={<Produits />} />
            </Routes>
          </main>
          <footer></footer>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
