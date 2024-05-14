import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PickUp.css';

function PickUp() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupResults, setPickupResults] = useState([]);
  const [dropResults, setDropResults] = useState([]);
  const [selectedField, setSelectedField] = useState(null);

  useEffect(() => {
    const fetchPlaces = async (query, setter) => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1Ijoic2FpLTc1IiwiYSI6ImNscnNyaHQ3ODA2bnYycXFhdjBpYjBwNW4ifQ.193YavYlQcgkGkpDVaCHkw`
        );

        const places = response.data.features.map((place) => ({
          name: place.place_name,
          coordinates: place.geometry.coordinates,
        }));

        setter(places);
      } catch (error) {
        console.error('Error fetching places:', error.message);
      }
    };

    if (pickup && selectedField === 'pickup') {
      fetchPlaces(pickup, setPickupResults);
    }

    if (drop && selectedField === 'drop') {
      fetchPlaces(drop, setDropResults);
    }
  }, [pickup, drop, selectedField]);

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
    setSelectedField('pickup');
  };

  const handleDropChange = (e) => {
    setDrop(e.target.value);
    setSelectedField('drop');
  };

  const handlePredictionClick = (value) => {
    // Set the selected prediction to the corresponding input field
    if (selectedField === 'pickup') {
      setPickup(value);
    } else if (selectedField === 'drop') {
      setDrop(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the entered data here
  };

  return (
    <div className="picks">
      <h1>Pickup and Drop Points</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup Point:
          <input type="text" value={pickup} onChange={handlePickupChange} />
        </label>
        {pickupResults.length > 0 && (
          <ul>
            {pickupResults.map((place, index) => (
              <li key={index} onClick={() => handlePredictionClick(place.name)}>
                {place.name}
              </li>
            ))}
          </ul>
        )}
        <br />
        <label>
          Drop Point:
          <input type="text" value={drop} onChange={handleDropChange} />
        </label>
        {dropResults.length > 0 && (
          <ul>
            {dropResults.map((place, index) => (
              <li key={index} onClick={() => handlePredictionClick(place.name)}>
                {place.name}
              </li>
            ))}
          </ul>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PickUp;
