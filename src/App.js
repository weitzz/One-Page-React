import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

import './App.css';

const App = () =>{
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
