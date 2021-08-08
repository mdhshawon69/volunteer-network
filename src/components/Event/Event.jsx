import React from 'react';
import { useContext } from 'react';
import { EventsContext } from '../../App';
import {
  ButtonArea,
  CancelButton,
  EventCard,
  EventCardTitle,
  EventImage,
} from './Event.elements';

const Event = (props) => {
  const { taskName, id, img, color, date } = props.data;
  const [events, setEvents] = useContext(EventsContext);
  const handleCancel = (id) => {
    const newEvents = events.filter((item) => item.id !== id);
    setEvents(newEvents);
  };
  return (
    <div>
      <EventCard color={color}>
        <EventImage src={img} alt='' />
        <EventCardTitle>
          <h3 style={{ marginBottom: '10px' }}>{taskName}</h3>
          <h4>{date}</h4>
        </EventCardTitle>
        <ButtonArea>
          <CancelButton onClick={() => handleCancel(id)}>Cancel</CancelButton>
        </ButtonArea>
      </EventCard>
    </div>
  );
};

export default Event;
