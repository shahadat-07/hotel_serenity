import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AvailableHotelCard from '../AvailableHotelCard/AvailableHotelCard';
import hotelsData from '../../../FakeData/HotelFakeData.json';

const AvailableHotels = () => {
    const location = useSelector(state => state.location);
    const [hotels, setHotels] = useState([]);
    console.log(hotels)
    useEffect(() => {
        // let hotelFound = hotelsData.filter(hotel => hotel.location === location);
        // if(hotelFound.length === 0){
        //     hotelFound = hotelsData.slice(0, 2);
        // }
        fetch(`https://powerful-harbor-18198.herokuapp.com/availableHotels/${location}`)
        .then(res => res.json())
        .then(data => setHotels(data))
        
    }, [location])
    return (
        <div className="container py-5">
            <div className="row">
                {hotels.map((hotel) => <AvailableHotelCard key={hotel.idHotel} hotelData={hotel}/>)}          
            </div>
        </div>
    );
};

export default AvailableHotels;