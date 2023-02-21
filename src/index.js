import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { Constants } from './constans/Constans';
import { GlobalStyles } from './GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Constants}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
