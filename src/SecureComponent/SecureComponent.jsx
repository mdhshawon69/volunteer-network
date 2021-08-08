import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';

function SecureComponent({ children, ...rest }) {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/register',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default SecureComponent;
