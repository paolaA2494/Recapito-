import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import MyProducts from '../pages/MyProducts';
import Layout from '../components/Layout';

const App = () => {
    return(
     <BrowserRouter>
       <Switch>
        <Route path="/iniciosesion" component={Register} />  
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/misproductos" component={MyProducts} />
        </Layout>
       </Switch>
     </BrowserRouter> 

    )
};

export default App;
