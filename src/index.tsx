import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Inicio from './pages/Inicio';
import Cabecalho from './pages/Cabecalho';
import reportWebVitals from './reportWebVitals';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';
import { BrowserRouter, Route } from 'react-router-dom';
import Application from './application';


const theme= createTheme ({
  palette: {
    primary: {
      main: '#03BB85'
    },
    secondary: {
      main: '#9400d3'
    },
  }
})


ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <ThemeProvider theme={theme}>
    <Application/>
        <Cabecalho/>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();