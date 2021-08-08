import React, { useState } from 'react';
import { useEffect } from 'react';
import VolunteerOption from '../VolunteerOption/VolunteerOption';
import { ItemsMain } from './VolunteerItems.elements';

const VolunteerItems = () => {
  const [volunteerOptions, setVolunteerOptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getEvent')
      .then((res) => res.json())
      .then((data) => setVolunteerOptions(data));
  }, []);
  return (
    <ItemsMain>
      {volunteerOptions.map((item) => (
        <VolunteerOption data={item} key={item.id} />
      ))}
    </ItemsMain>
  );
};

export default VolunteerItems;
