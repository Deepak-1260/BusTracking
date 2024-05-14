// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import bus_image from './assets/bus.png';
import './Nav.css'; 
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={bus_image}/>
      <ul>
      <li>
      <Link to="/BusLocation">
        Bus Location
      </Link>
      </li>

      

      <li>
      <Link to="/SearchBus">
        Search Bus
      </Link>
      </li>

      <li>
      <Link to="/NearestBusStop">
        Nearest Bus Stop
      </Link>
      </li>

      <li>
      <Link to="/Emergence">
       Emergence
      </Link>
      </li>

      <li>
      <Link to="/Feedback">
        Feedback
      </Link>
      </li>

      
      </ul>
    </div>
  );
};

export default Navbar;
