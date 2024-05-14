import React from 'react';
import { Link } from 'react-router-dom';

const DummyComp = ({ compname, imageUrl, path }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      width: '25%', 
      margin: '10px', 
      borderRadius: '10px', 
      padding: '10px', 
      backgroundColor: '#add8e6', 
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      border: '2px solid #000000' /* Add border style here */,
      }}>
      
      <Link to={path}>
      <div style={{ 
        width: '100%', 
        height: '200px', 
        margin: '0 auto', 
        overflow: 'hidden', 
        borderRadius: '10px', 
        marginBottom: '10px', 
        backgroundColor: '#ffffff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' }}>
        <img src={imageUrl} alt="Passport" style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
          borderRadius: '10px' }} />
      </div>
      </Link>
      <p style={{ 
        marginTop: '10px', 
        fontSize: '28px', 
        fontWeight: 'bold', 
        color: 'black' }}>{compname}</p>
    </div>
  );
};

export default DummyComp;

