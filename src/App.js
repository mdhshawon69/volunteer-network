/* eslint-disable no-sequences */
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Homepage from './pages/Homepage/Homepage';
import { createContext } from 'react';
import { useState } from 'react';
import OnlyForAdmin from './SecureComponent/OnlyForAdmin';
import SecureComponent from './SecureComponent/SecureComponent';
import Eventspage from './pages/Eventspage/Eventspage';
import Registerpage from './pages/Registerpage/Registerpage';
import Adminpage from './pages/Adminpage/Adminpage';

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
              <Homepage />
            </Route>
            <Route path='/register'>
              <Registerpage />
            </Route>
            <OnlyForAdmin path='/admin'>
              <Adminpage />
            </OnlyForAdmin>
            <SecureComponent path='/events'>
              <Eventspage />
            </SecureComponent>
          </Switch>
        </Router>
      </UserContext.Provider>
    </EventsContext.Provider>
  );
}

export default App;
