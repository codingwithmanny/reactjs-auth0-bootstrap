// IMPORTS
// ------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Providers
import {BrowserRouter} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

// Route Components
import Routes from './routes';

// MAIN RENDER
// ------------------------------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={window.REACT_APP_AUTH0_DOMAIN}
      clientId={window.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();