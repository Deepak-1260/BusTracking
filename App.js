//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeScreen from './components/HomeScreen';

import BusLocation from './components/BusLocation';
import Emergence from './components/Emergence';
import SearchBus from './components/SearchBus';
import NearestBusStop from './components/NearestBusStop';
import Feedback from './components/Feedback';
import Buses from './components/Buses';
import ServerData from './components/ServerData';

function App() {
  return (
    //<PickUp/>
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/HomeScreen" exact element={<HomeScreen/>}/>
        <Route path="/Buses" element={<Buses/>}/>
        <Route path="/Bus1" element={<ServerData/>}/>
        <Route path="/Bus2" element={<ServerData/>}/>
        <Route path="/BusLocation" element={<BusLocation />} />
        <Route path="/SearchBus" element={<SearchBus/>} />
        <Route path="/NearestBusStop" element={<NearestBusStop/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Emergence" element={<Emergence />} />
      </Routes>
    </Router>
   
   
  );
}

export default App;

 {/* <Route path="/Bus1" element={<SliderComponent/>}/>
         <Route path="/Bus2" element={<SliderComponent/>}/> */}
         import SliderComponent from './components/SliderComponent';
         import PickUp from './components/PickUp';
