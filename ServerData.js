import React, { useState, useEffect } from 'react';

function ServerData() {
  const [data, setData] = useState([]);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    const fetchDataInterval = setInterval(fetchData, 5000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/coords'); // Change URL as needed
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const { lat, long } = data[data.length - 1]; // Accessing the last record in data
      if (lat !== undefined && long !== undefined) {
        showLocation(lat, long);
      } else {
        console.error('Latitude or longitude is undefined');
      }
    } else {
      console.error('No data received from server');
    }
  }, [data]);

  function showLocation(lat, long) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`)
      .then(response => response.json())
      .then(data => {
        const locationName = data.display_name;
        setLocationName(locationName);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <div>
      <h1>Busmate Data</h1>
      <p>{locationName}</p>
    </div>
  );
}

export default ServerData;