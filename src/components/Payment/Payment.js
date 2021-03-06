import React, { useContext } from 'react';
import BillCard from '../Shared/BillCard/BillCard';
import './Payment.css';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import DetailPricingForm from '../HotelDetails/DetailPricingForm';
import { SelectedHotelContext } from '../../App';

const Payment = () => {
    const [selectedHotel] = useContext(SelectedHotelContext);
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mb-5 pb-5">Confirm and Pay</h1>
                <div className="col-md-7"> 
                    <h3 className="text-secondary mb-5">Select Payment Method</h3>
                    <PaymentProcess/>
                </div>
                <div className="col-md-5">
                <DetailPricingForm hotelData={selectedHotel} showRating={false} showHotel={true} showButton={false}/>
                </div>
            </div>
        </div>
    );
};

export default Payment;