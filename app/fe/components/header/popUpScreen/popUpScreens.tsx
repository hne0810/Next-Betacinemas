"use client";

import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import citiesData from "./citiesData.json";

const PopupScreen = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(true);

    const [selectedCity, setSelectedCity] = useState('');
    const [locations, setLocations] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleClose = () => { setIsPopupVisible(false); };

    const handleCityChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = e.target.value;
        setSelectedCity(cityId);

        const city = citiesData.find(city => city.id === parseInt(cityId));
        setLocations(city ? city.locations : []);
        setSelectedLocation("");
    };

    return (
        <div className="flex justify-center">
            {isPopupVisible && (
            <div className="w-[700px] h-[200px] inline-block bg-white mt-40">
                <div className="flex justify-end">
                    <button 
                        className="absolute z-10 w-[44px] text-slate-400 mt-2"
                        onClick={handleClose} >
                        <CloseOutlined />
                    </button>
                </div>
                <div className="flex flex-row items-center flex-1">
                    <div className="flex-1">
                        <div className="flex justify-center mt-16">
                            <p className="text-slate-800 text-base font-bold">Tỉnh/Thành phố</p>
                        </div>
                        <div className="flex justify-center">
                            <select
                                id='tinhTP'
                                value={selectedCity}
                                onChange={handleCityChange}
                                className="w-[60%] h-[25px] bg-white text-slate-800 text-sm mt-4 border border-solid border-black rounded">
                                <option>Chọn tỉnh/thành phố</option>
                                {citiesData.map(city => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center mt-16">
                            <text className="text-slate-800 text-sm font-bold">Rạp</text>
                        </div>
                        <div className="flex justify-center">
                            <select
                                id='rap'
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-[60%] h-[25px] bg-white text-slate-800 text-sm mt-4 border border-solid border-black rounded">
                                <option>Chọn chi nhánh</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default PopupScreen;
