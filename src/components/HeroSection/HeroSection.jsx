import React from 'react';
import {
  ButtonSearch,
  Heading,
  SearchForm,
  SearchInput,
  Main,
} from './HeroSection.elements';

const HeroSection = () => {
  return (
    <Main>
      <Heading>i grow by helping people in need</Heading>
      <SearchForm>
        <SearchInput type='text' placeholder='Search here' />
        <ButtonSearch type='submit' value='Search' />
      </SearchForm>
    </Main>
  );
};

export default HeroSection;
