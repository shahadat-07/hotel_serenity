import React from 'react';
import BillCard from '../Shared/BillCard/BillCard';
import './Payment.css';

const Payment = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mb-5 pb-5">Confirm and Pay</h1>
                <div className="col-md-7"> 
                    <h3 className="text-secondary mb-5">Select Payment Method</h3>
                    <div className="creditCard">
                        <h4>Credit Card</h4>
                    </div>
                    <div className="paypal mt-4">
                        <h3>Paypal</h3>
                        <a href="paypal.com">You will be redirect to PayPal official website </a>
                    </div>
                </div>
                <div className="col-md-5">
                    <BillCard></BillCard>
                </div>
            </div>
        </div>
    );
};

export default Payment;