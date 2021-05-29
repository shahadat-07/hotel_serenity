import React from 'react';
import hotels from '../../../FakeData/HotelFakeData.json';
import HotelCard from '../HotelCard/HotelCard';

const Hotels = () => {

    console.log(hotels)

    
    return (
        <div className="col col-md-8 py-5">
            {hotels.length > 0 && <h1>Popular Hotels</h1>}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
            </div>
        </div>
    );
};

export default Hotels;