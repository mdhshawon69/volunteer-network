/* eslint-disable no-unused-vars */
import { Button, Container } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { EventsContext, UserContext } from '../../App';
import Event from '../Event/Event';
import { EventsBody, NoEvents } from './AddedEvents.elements';

const AddedEvents = () => {
  const [events, setEvents] = useContext(EventsContext);
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const handleConfirm = () => {
    const userData = {
      ...loggedUser,
      events: events,
    };

    fetch('https://volunteer-network69.herokuapp.com/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) =>
        data ? console.log('User added') : console.log('Unable to add User')
      );
    setEvents([]);
  };

  return (
    <Container>
      <EventsBody>
        {events.length === 0 ? (
          <NoEvents>No Events Added</NoEvents>
        ) : (
          events.map((event) => <Event key={event.id} data={event} />)
        )}
      </EventsBody>
      {events.length ? (
        <Button
          style={{ float: 'right', marginBottom: '20px' }}
          variant='contained'
          color='primary'
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      ) : null}
    </Container>
  );
};

export default AddedEvents;
