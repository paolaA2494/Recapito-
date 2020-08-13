import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Register () {
   
    return(
    <>
      <Header   companyName="Recapito"
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
        button="Registro" />
      <Login />
    </>
    )
}