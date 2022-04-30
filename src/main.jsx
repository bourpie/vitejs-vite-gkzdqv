import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/routes/home';
import Produits from '/routes/products';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.scss';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color="default" elevation={0}>
          <nav>
            <Container>
              <Toolbar disableGutters={true}>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                  Company name
                </Typography>

                <Link
                  variant="button"
                  color="text.primary"
                  href="/"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Home
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="/produits"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Products
                </Link>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Training
                </Link>
              </Toolbar>
            </Container>
          </nav>
        </AppBar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="produits" element={<Produits />} />
          </Routes>
        </main>
        <footer></footer>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
