import React from 'react';
import ReactDOM from 'react-dom';
import './utils/styles/reset.scss';
import './utils/styles/colors.scss';
import './utils/styles/typography.scss';
import Navigation from './components/Navigation/Navigation.js';
import Header from './components/Header/Header.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
