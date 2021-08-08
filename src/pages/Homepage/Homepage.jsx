import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import VolunteerItems from '../../components/VolunteerItems/VolunteerItems';
import Navigation from '../../components/Navigation/Navigation';

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <VolunteerItems />
    </div>
  );
};

export default Homepage;
