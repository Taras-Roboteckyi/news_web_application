import React from 'react';
/* import ReactDOM from 'react-dom'; */
import { createRoot } from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { store, persistor } from './redux/store';
import { Constants } from './constans/Constans';
import { GlobalStyles } from './GlobalStyle.styled';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={Constants}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
