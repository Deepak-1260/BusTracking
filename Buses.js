import React from 'react';
import Navbar from './Nav';
import DummyComp from './dummyComp';
import bus_image from "./assets/buslocator.png";

function HomeScreen() {
  return (
      <div className="HomeScreen">
        <h1 align="center">BUSMATE</h1>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop: '100px' }}>
            <DummyComp compname="Bus1" imageUrl= {bus_image} path="/Bus1"/>
            <DummyComp compname="Bus2" imageUrl={bus_image} path="/Bus2" />
        </div>
      </div>
      

  );
}

export default HomeScreen;