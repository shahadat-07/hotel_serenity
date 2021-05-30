import React, { useEffect, useState } from 'react';
import hotelsData from '../../../FakeData/HotelFakeData.json';
import HotelCard from '../HotelCard/HotelCard';

const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    

    useEffect(() => {
        fetch('https://powerful-harbor-18198.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    
    return (
        <div className="col py-5">
            {hotels.length > 0 && <h1>Popular Hotels</h1>}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {hotels.map((hotel, index) => <HotelCard key={index} hotel={hotel} />)}
            </div>
        </div>
    );
};

export default Hotels;