import React from 'react';
import Navbar from './Nav';
import DummyComp from './dummyComp';
import bus_image from "./assets/buslocator.png";
import eme_image from "./assets/emergency.png";
import feed_image from "./assets/images.jpeg";
function HomeScreen() {
  return (
      <div className="HomeScreen">
        <h1 align="center">BUSMATE</h1>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center' ,marginTop: '100px' }}>
            <DummyComp compname="Serach Buses" imageUrl= {bus_image} path="/Buses"/>
            <DummyComp compname="Emergency" imageUrl={eme_image} path="/Emergence" />
            <DummyComp compname="Feedback" imageUrl={feed_image} path="/Feedback"/>
        </div>
      </div>
      

  );
}

export default HomeScreen;
