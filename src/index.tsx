import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          paddingTop: '0',
          paddingBottom: '0',
        },
      },
    },
  },
});

root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </BrowserRouter> */}
  </Provider>
);
