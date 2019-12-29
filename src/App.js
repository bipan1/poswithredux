import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './templates/Home'
import Category from './templates/Category'
import ProductDescription from './templates/ProductDescription'
import Header from './components/Header'
import Confirmation from './templates/Confirmation'
import './App.scss';

function App() {
  return (
  
    <BrowserRouter>
    <React.Fragment>
      <Header/>
      <Switch>
        <Redirect from="/home" to="/"/>
        <Route exact path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/product" component={ProductDescription}/>
        <Route path="/confirmation" component={Confirmation}/>

      </Switch>
    </React.Fragment>
  </BrowserRouter>
     
  );
}

export default App;
