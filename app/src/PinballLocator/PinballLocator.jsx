import React from 'react';

import Button from './Button';
import CoordinateInput from './CoordinateInput';
import { fetchLocations } from '../utils/locationFunctions';

const PinballLocator = ({ latitude, longitude, setLatitude, setLongitude, setLoading, setError, setPinballLocations}) => {
  
  const validateCoordinates = (latitude, longitude) => {
    const isValidLatitude = typeof latitude === 'number' && isFinite(latitude) && Math.abs(latitude) <= 90;
    const isValidLongitude = typeof longitude === 'number' && isFinite(longitude) && Math.abs(longitude) <= 180;
  
    return isValidLatitude && isValidLongitude;
  };
  
  const handleSearch = () => {
    if (validateCoordinates(latitude, longitude)) {
    fetchLocations('search', latitude, longitude, setLoading, setLongitude, setLatitude, setPinballLocations, setError)
    }
    else{
      setError('Invalid Coordinates')
    }
  };
  
  const handleNearMe = ()=>{
    fetchLocations('nearMe', latitude, longitude, setLoading, setLongitude, setLatitude, setPinballLocations, setError)
  }
  
  return (
    <div>
      <CoordinateInput label="Latitude:" value={latitude} onChange={(e) => {
    setLatitude(e.target.value);
    setError('');
  }} />
      <CoordinateInput label="Longitude:" value={longitude} onChange={(e) => {
    setLongitude(e.target.value);
    setError('');
  }} />
      <Button onClick={handleNearMe}>Near Me</Button>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default PinballLocator;
