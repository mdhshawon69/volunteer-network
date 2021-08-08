import React, { useState } from 'react';
import {
  AddForm,
  AddInput,
  AddTextArea,
  FormArea,
  FormButton,
  FormLabel,
  FormSide,
} from './AddingForm.elements';

const AddingForm = () => {
  const [data, setData] = useState({
    id: '',
    taskName: '',
    description: '',
    img: '',
    color: '',
    date: '',
  });

  const handleOnChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e, data) => {
    fetch('https://volunteer-network69.herokuapp.com/addEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        data
          ? console.log(data, 'Event added successfully')
          : console.log('Data not added')
      );

    e.preventDefault();
  };

  return (
    <div>
      <FormArea>
        <AddForm onSubmit={(e) => handleSubmit(e, data)}>
          <FormSide>
            <FormLabel>Event Id</FormLabel>
            <AddInput
              onChange={(e) => handleOnChange(e)}
              value={data.id}
              id='id'
              type='text'
              placeholder='Enter Id'
              required
            />
            <FormLabel>Event Title</FormLabel>
            <AddInput
              onChange={(e) => handleOnChange(e)}
              value={data.taskName}
              id='taskName'
              type='text'
              placeholder='Enter Title'
              required
            />
            <FormLabel>Event Description</FormLabel>
            <AddTextArea
              id='description'
              onChange={(e) => handleOnChange(e)}
              value={data.description}
              placeholder='Enter Description'
              required
            />
          </FormSide>
          <FormSide>
            <FormLabel>Event Color</FormLabel>
            <AddInput
              onChange={(e) => handleOnChange(e)}
              value={data.color}
              id='color'
              type='text'
              placeholder='Enter Color'
              required
            />
            <FormLabel>Event Date</FormLabel>
            <AddInput
              onChange={(e) => handleOnChange(e)}
              value={data.date}
              id='date'
              type='date'
              required
            />
            <FormLabel>Event Banner</FormLabel>
            <AddInput
              onChange={(e) => handleOnChange(e)}
              value={data.img}
              id='img'
              type='text'
              placeholder='Enter Banner'
              required
            />
          </FormSide>
          <FormButton type='submit' value='Submit' />
        </AddForm>
      </FormArea>
    </div>
  );
};

export default AddingForm;
