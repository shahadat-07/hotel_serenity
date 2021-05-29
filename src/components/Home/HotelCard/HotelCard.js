import React from 'react';

const HotelCard = ({hotel}) => {
    const {hotelImg, title, price} = hotel;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={hotelImg} className="card-img-top img-fluid" alt="hotel" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price} Per Person</p>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;