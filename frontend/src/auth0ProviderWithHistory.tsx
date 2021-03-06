import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE!;
  console.log('SEE env vars:', process.env.REACT_APP_AUTH0_DOMAIN, process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_AUDIENCE)
  const history = useHistory();

  console.log('Callback:', window.location.origin)

  const { user } = useAuth0();

  console.log('User info:', user)

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;