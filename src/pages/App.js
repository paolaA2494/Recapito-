import React from 'react';
import Header from '../components/Header';
import Princing from '../components/Pricing';
import Card from '../components/CardPrices';
import Footer from '../components/Footer';


function App() {
  return (
    <div>
      <Header 
        companyName="Recapito"
        navBar= {[
         {
           name:"Facebook",
           url: "http://facebook.com"
         },
         {
          name:"Instagram",
          url: "http://instagram.com"
        },
        {
          name:"Twitter",
          url: "http://twitter.com"
        },
        {
          name:"Linkedin",
          url: "http://linkedin.com"
        }

        ]}
        button="Registro"
      />
      <Princing />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
