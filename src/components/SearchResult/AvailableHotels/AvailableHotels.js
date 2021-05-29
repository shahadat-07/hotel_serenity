import React from 'react';
import AvailableHotelCard from '../AvailableHotelCard/AvailableHotelCard';

const AvailableHotels = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="row">
                        <AvailableHotelCard/>
                    </div>
                </div>
                <div className="col-md-8 offset-md-2">
                    <div className="row">
                        <AvailableHotelCard/>
                    </div>
                </div>
                <div className="col-md-8 offset-md-2">
                    <div className="row">
                        <AvailableHotelCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHotels;