/* eslint-disable no-sequences */
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { GlobalStyle } from './GlobalStyles';
import Homepage from './pages/Homepage/Homepage';
import { createContext } from 'react';
import { useState } from 'react';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import OnlyForAdmin from './SecureComponent/OnlyForAdmin';
import SecureComponent from './SecureComponent/SecureComponent';
import AddedEvents from './components/AddedEvents/AddedEvents';

export const EventsContext = createContext();
export const UserContext = createContext();

function App() {
  const [events, setEvents] = useState([]);
  console.log(events);
  const [loggedUser, setLoggedUser] = useState({
    task: '',
    success: '',
    error: '',
    email: '',
    name: '',
  });
  return (
    <EventsContext.Provider value={[events, setEvents]}>
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navigation />
              <Homepage />
            </Route>
            <Route path='/register'>
              <Navigation />
              <Register />
            </Route>
            <OnlyForAdmin path='/admin'>
              <Admin />
            </OnlyForAdmin>
            <SecureComponent path='/events'>
              <Navigation />
              <AddedEvents />
            </SecureComponent>
          </Switch>
        </Router>
      </UserContext.Provider>
    </EventsContext.Provider>
  );
}

export default App;
