import React, { useState } from 'react';
import VolunteerOption from '../VolunteerOption/VolunteerOption';
import volunteerData from './data';
import { ItemsMain } from './VolunteerItems.elements';

const VolunteerItems = () => {
  const [volunteerOptions, setVolunteerOptions] = useState([...volunteerData]);
  console.log(volunteerData);
  return (
    <ItemsMain>
      {volunteerOptions.map((item) => (
        <VolunteerOption data={item} key={item.id} />
      ))}
    </ItemsMain>
  );
};

export default VolunteerItems;
