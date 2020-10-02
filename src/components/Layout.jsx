import React from 'react';
import Header from './Header';
import Footer from './Footer';


function Layout (props) {
    return(
     <>
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
     button="Iniciar Sesión"
     />
        {props.children}
     <Footer />
     </>
    )
}

export default Layout;