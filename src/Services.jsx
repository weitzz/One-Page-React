import React, { Component } from "react";
import Card from './Card';
import Sdata from './Sdata';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="my-5">
          <h1 className="text-center text-white">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
               { Sdata.map((val,ind)=>{
                 return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
               })}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
export default Services;
