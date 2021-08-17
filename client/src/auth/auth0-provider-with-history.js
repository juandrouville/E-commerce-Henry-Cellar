import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = () => {
    history.push("/home");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // domain="dev-qwgbl3q5.us.auth0.com"
      // clientId="CpKkXkyG670JY3pHcHXBv2SnTK5q35wS"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
