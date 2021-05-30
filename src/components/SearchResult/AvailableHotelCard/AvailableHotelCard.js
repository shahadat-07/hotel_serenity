import React from 'react';
import { Link } from 'react-router-dom';

const AvailableHotelCard = ({hotelData}) => {
    const {guests, bedrooms, beds, baths, title, hotelImg, ratings, price, facilities1, facilities2, _id} = hotelData;
    
    return (
        <div className="col col-md-8 offset-md-2">
            <div className="card border-0 border-bottom pb-1 mb-3 py-0">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img className="img-fluid" src={hotelImg} alt="hotel" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={`/hotels/${_id}`} className="card-title text-decoration-none fw-bold fs-5 m-0 p-0">{title}</Link>
                            <p className="card-text">{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>
                            <p className="card-text"><small className="text-muted">{facilities1}</small></p>
                            <p className="card-text mb-0"><small className="text-muted">{facilities2}</small></p>
                            <div className="d-flex justify-content-between">
                                <p>User Ratings: {ratings}</p>
                                <p>${price}/night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableHotelCard;