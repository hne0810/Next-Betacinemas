'use client'

import React, { useState } from 'react';
import citiesData from "../../popUpScreen/citiesData.json";

const HeaderMid = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    const city = citiesData.find(city => city.id === parseInt(cityId));
    setLocations(city ? city.locations : []);
    setSelectedLocation("");
  };

  return (
    <div className=''>
      <select 
        onChange={handleCityChange} value={selectedCity}
        className='border-solid' >
        <option value="" disabled>Select a city</option>
        {citiesData.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      {locations.length > 0 && (
        <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
          <option value="" disabled>Select a location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default HeaderMid;
