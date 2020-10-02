import React from 'react';
import Princing from '../components/Pricing';
import CardPrices from '../components/CardPrices';


import { data } from '../utils/mocks/data';

function Home () {
  return (
    <div>
    
      <Princing />
      <CardPrices datos = { data }/>
   
    </div>
  );
}

export default Home;
