import React from 'react';
import './HotelDetails.css';
import DetailPricingForm from './DetailPricingForm';
import { hotelBenefit } from '../../FakeData/data';
import HotelBenefit from '../HotelDetails/HotelBenefit';

const HotelDetails = () => {

    return (
        <div className="container details-container">
            <div className="row img-height">
                <div className="col-md-6">
                    <img className="w-100" src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" alt="Hotel Building" />
                </div>
                <div className="col-md-6">
                    <img className="w-100" src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" alt="Hotel Bedroom" />
                </div>
            </div>
            <div className="detail-width">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-9">
                                <h2>Light Bright airy stylish apt & safe peaceful stay</h2>
                            </div>
                            <div className="col-md-3">
                                <img className="person-img rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU" alt="" />
                            </div>
                        </div>
                        <p className="paragraph-text-color mt-3">Dhaka, Bangladesh</p>
                        <p>4 guests  2 bedrooms  2 beds  2 baths</p>
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