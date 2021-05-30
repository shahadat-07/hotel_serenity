import React, { useEffect, useState } from 'react';
import './HotelDetails.css';
import { hotelBenefit } from '../../FakeData/data';
import HotelBenefit from './HotelBenefit';
import DetailPricingForm from './DetailPricingForm';
import { useParams } from 'react-router';
import hotelsData from '../../FakeData/singleHotelData.json';

const HotelDetails = () => {
    const {id} = useParams();
    const [hotel, setHotel] = useState({});
    const {guests, bedrooms, beds, baths, title, hotelImg, location, ratings, price, facilities1, facilities2, _id, owner, ownerImg} = hotel;
    useEffect(() => {
        fetch(`https://powerful-harbor-18198.herokuapp.com/hotel`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        })
        .then(res => res.json())
        .then(data => setHotel(...data))
    }, [id]);

    return (
        <div className="container details-container">
            <div className="row img-height">
                <div className="col-md-6">
                    <img className="w-100" src={hotelImg} alt="Hotel Building" />
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={hotelImg} alt="Hotel Bedroom" />
                </div>
            </div>
            <div className="detail-width">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-9">
                                <h2>{title}</h2>
                            </div>
                            <div className="col-md-3">
                                <img className="person-img rounded-circle" src={ownerImg} alt="owner" />
                            </div>
                        </div>
                        <p className="paragraph-text-color mt-3">{location}, Bangladesh</p>
                        <p>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>
                        <hr />
                        <div>
                            {
                                hotelBenefit.map((benefit, index) => <HotelBenefit key={index} benefit={benefit}></HotelBenefit>)
                            }
                        </div>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a optio libero quae veniam quaerat esse blanditiis sint error labore in placeat enim est quasi distinctio, hic velit illo mollitia!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod, fuga adipisci voluptates eligendi nostrum delectus! Quibusdam temporibus veniam officia blanditiis omnis, dicta nam at necessitatibus fugit sequi voluptates autem deleniti distinctio doloremque? Aspernatur velit inventore quam a eveniet qui!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit deleniti nihil, quod iusto debitis necessitatibus ad obcaecati modi dolorem.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="pricing-section">
                            <DetailPricingForm></DetailPricingForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;