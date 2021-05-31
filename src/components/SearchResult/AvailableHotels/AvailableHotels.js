import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AvailableHotelCard from '../AvailableHotelCard/AvailableHotelCard';
import hotelsData from '../../../FakeData/HotelFakeData.json';
import { SelectedHotelContext } from '../../../App';

const AvailableHotels = () => {
    const location = useSelector(state => state.location);
    const [selectedHotel, setSelectedHotel] = useContext(SelectedHotelContext);
    const [hotels, setHotels] = useState([]);
    const [hotelID, setHotelID] = useState({});
    useEffect(() => {
        const hotel = hotels.find(hotel => hotel._id === hotelID);
        setSelectedHotel(hotel)
    }, [hotelID, hotels, setSelectedHotel]);
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
                {hotels.map((hotel) => <AvailableHotelCard setHotelID={setHotelID} key={hotel.idHotel} hotelData={hotel}/>)}          
            </div>
        </div>
    );
};

export default AvailableHotels;