import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from '@Theme';
import store from '@Redux';
import Routes from '@Routes';
import GlobalStyles from '@Theme/global';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.querySelector('#snake-game-app'),
);
