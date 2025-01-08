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
    <div className='grid place-items-center'>
      <select 
        onChange={handleCityChange} value={selectedCity}
        className='ml-[20px] text-slate-800 font-sans font-semibold text-center' >  
          {citiesData.map(city => (
        <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      {locations.length > 0 && (
        <select 
          onChange={(e) => setSelectedLocation(e.target.value)} 
          value={selectedLocation}
          className='ml-[20px] text-slate-800 font-sans font-semibold text-center'>
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
