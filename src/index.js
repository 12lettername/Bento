import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-tjxhpdc1rgh2obw2.us.auth0.com"
    clientId="RJ6Zx2iDFOyPwLFc8JbQWmyQd64niRXs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
);

