import React from 'react';
import {
  RegisterArea,
  RegisterButton,
  RegisterLogo,
  RegisterLogoArea,
  RegisterMessage,
} from './Register.elements';
import img from '../../logos/Group 1329.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../FirebaseConfig';
import { useContext } from 'react';
import { EventsContext, UserContext } from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Register = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [events, setEvents] = useContext(EventsContext);
  const history = useHistory();
  const location = useLocation();
  const provider = new firebase.auth.GoogleAuthProvider();
  let { from } = location.state || { from: { pathname: '/' } };

  if (loggedUser.email) {
    fetch('http://localhost:3001/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { ...loggedUser, events: events },
    })
      .then((res) => res.json())
      .then((data) =>
        data ? console.log('User added') : console.log('Unable to add User')
      );
  }

  const handleRegister = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const { email, displayName, photoURL } = result.user;
        const newUser = {
          ...loggedUser,
          email: email,
          task: 'performed',
          success: true,
          name: displayName,
          image: photoURL,
        };
        setLoggedUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUser = {
          ...loggedUser,
          error: errorMessage,
        };
        setLoggedUser(newUser);
      });
  };

  return (
    <div>
      <RegisterLogoArea>
        <RegisterLogo src={img} />
      </RegisterLogoArea>
      <RegisterArea>
        <RegisterMessage performed={loggedUser.task}>
          <p>
            {loggedUser.success ? 'Successfully registered' : loggedUser.error}
          </p>
        </RegisterMessage>
        <h2>Register With</h2>
        <RegisterButton onClick={handleRegister}>
          <img
            style={{ height: '40px', width: 'auto', justifySelf: 'flex-start' }}
            src='https://img.icons8.com/fluent/50/000000/google-logo.png'
            alt=''
          />
          <span style={{ flexGrow: '0.83' }}>Continue with Google</span>
        </RegisterButton>
        <p>
          Don't have an account?
          <Link style={{ textDecoration: 'none', color: '#3f90fc' }}>
            Create account now!
          </Link>
        </p>
      </RegisterArea>
    </div>
  );
};

export default Register;
