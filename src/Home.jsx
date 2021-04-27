import React, { Component } from 'react';
import web from '../src/img/space.png';

import Commom from './Commom';



class Home extends Component {
  render() {
    return (
      <div>
      <Commom
      name="Grow your business with" 
      imgsrc={web} 
      visit="/services" 
      btnname="Get Started" 
      />
     </div>
    )
  }
}
export default Home;