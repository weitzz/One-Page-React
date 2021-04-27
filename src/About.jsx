import React, { Component } from 'react';
import Web from '../src/img/design.png';
import { NavLink } from 'react-router-dom';
import Commom from './Commom';



class About extends Component {
  render() {
    return (
      <div>
        <Commom 
        name="Welcome to About page" 
        imgsrc={Web} 
        visit="/contact" 
        btnname="Contact Now" />
     </div>
    )
  }
}
export default About;