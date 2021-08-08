import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';

function OnlyForAdmin({ children, ...rest }) {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedUser.email === 'mahmudulhaqshaown@gmail.com' ? (
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

export default OnlyForAdmin;
