import React from 'react';
import InfoBox from '../components/InfoBox';
import CountrySelector from '../components/CountrySelector';
import Chart from '../components/Chart';

const Home = () => {
  return (
    <div>
      <InfoBox />
      <CountrySelector />
      <Chart />
    </div>
  );
};

export default Home;
